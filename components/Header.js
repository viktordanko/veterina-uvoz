import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import { RowMain } from "./Layout/RowMain";
import { HeaderWrap } from "components/HeaderWrap";
import { Logo } from "./Logo";
import { Menu } from "./Menu/Menu";
import { MenuButton } from "./Menu/MenuButton";
import { LocaleSwitcher } from './LocaleSwitcher';
import { useTranslation } from 'react-i18next';


export const Header = () => {

	const [menuOpened, setMenuOpened] = useState(false);

	const openMenu = useCallback(() => {
		setMenuOpened(!menuOpened);
	}, [menuOpened, setMenuOpened]);

	const closeMenu = useCallback(() => {
		if (openMenu) {
			setMenuOpened(false);
		}
	}, [menuOpened, setMenuOpened]);

	useEffect(() => {
		// TODO - Remove hash on menu link click
	}, [])

	const classes = classNames('header', menuOpened && 'is-opened');
	const { t } = useTranslation();

	return (
		<header className={classes}>
			<RowMain>
				<HeaderWrap>
					<Logo onClick={closeMenu} />
					<Menu>
						<ul className="m-main__list">
							<li className="m-main__item">
								<Link href="/" passHref>
									<a className="m-main__link" onClick={closeMenu}>
										{t('header.menuItems.intro')}
									</a>
								</Link>
							</li>
							<li className="m-main__item">
								<Link href="#about-us" passHref>
									<a className="m-main__link">
										{t('header.menuItems.aboutUs')}
									</a>
								</Link>
							</li>
							<li className="m-main__item">
								<Link href="#open-hours" passHref>
									<a className="m-main__link">
										{t('header.menuItems.openingHours')}
									</a>
								</Link>
							</li>
							<li className="m-main__item">
								<Link href="#contact" passHref>
									<a className="m-main__link">
										{t('header.menuItems.contact')}
									</a>
								</Link>
							</li>
							<li className="m-main__item m-main__item--phone">
								<Link href="tel:+420737112300">
									<a className="btn btn--sm">
										<span className="btn__text">
											{t('header.menuItems.callUs')}
										</span>
									</a>
								</Link>
							</li>
							<li className="m-main__item">
								<LocaleSwitcher />
							</li>
						</ul>
						<MenuButton menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
					</Menu >
				</HeaderWrap >
			</RowMain >
		</header >
	)
}