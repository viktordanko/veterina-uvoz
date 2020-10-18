import { RowMain } from "./Layout/RowMain";
import { HeaderWrap } from "@components/HeaderWrap";
import { Logo } from "./Logo";

export default function Header() {
	return (
		<header className="header">
			<RowMain>
				<HeaderWrap>
					<Logo />
				</HeaderWrap>
			</RowMain>
		</header>
	)
}