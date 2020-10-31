import { useState, useRef } from 'react';
import classNames from 'classnames';
import { RowMain } from "./Layout/RowMain";
import { HeaderWrap } from "components/HeaderWrap";
import { Logo } from "./Logo";
import { Menu } from "./Menu/Menu";
import { MenuList } from "./Menu/MenuList";
import { MenuButton } from "./Menu/MenuButton";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

export default function Header() {

	const [menuOpened, setMenuOpened] = useState(false);
	const classes = classNames('header', menuOpened && 'is-opened');

	const header = useRef(null);
	useOnClickOutside(header, () => setMenuOpened(false));

	return (
		<header className={classes} ref={header}>
			<RowMain>
				<HeaderWrap>
					<Logo />
					<Menu>
						<MenuList />
						<MenuButton menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
					</Menu>
				</HeaderWrap>
			</RowMain>
		</header>
	)
}