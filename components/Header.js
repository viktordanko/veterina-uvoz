import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import { RowMain } from "./Layout/RowMain";
import { HeaderWrap } from "components/HeaderWrap";
import { Logo } from "./Logo";
import { Menu } from "./Menu/Menu";
import { MenuButton } from "./Menu/MenuButton";
import menuItems from '../api/menu-items.json';
import { LocaleSwitcher } from './LocaleSwitcher';


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

	return (
		<header className={classes}>
			<RowMain>
				<HeaderWrap>
					<Logo onClick={closeMenu} />
					<Menu>
						<ul className="m-main__list">
							{menuItems.map(({ label, href, isPhoneButton }, id) => {
								if (isPhoneButton) {
									return (
										<li className="m-main__item m-main__item--phone" key={id}>
											<Link href={href} passHref>
												<a className="btn btn--sm">
													<span className="btn__text">{label}</span>
												</a>
											</Link>
										</li>
									);
								}
								if (href === '/') {
									return (
										<li className="m-main__item" key={id}>
											<Link href={href} passHref replace>
												<a className="m-main__link" onClick={closeMenu}>
													{label}
												</a>
											</Link>
										</li>
									);
								}
								return (
									<li className="m-main__item" key={id}>
										<Link href={href} passHref >
											<a className="m-main__link" onClick={closeMenu}>
												{label}
											</a>
										</Link>
									</li>
								);
							})}
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