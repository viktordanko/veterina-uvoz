import { RowMain } from "./Layout/RowMain";
import { HeaderWrap } from "@components/HeaderWrap";
import { Logo } from "./Logo";
import { Menu } from "./Menu/Menu";
import { MenuList } from "./Menu/MenuList";

export default function Header() {
	return (
		<header className="header">
			<RowMain>
				<HeaderWrap>
					<Logo />
					<Menu>
						<MenuList />
					</Menu>
				</HeaderWrap>
			</RowMain>
		</header>
	)
}