import { RowMain } from "./Layout/RowMain";
import { Logo } from "./Logo";
import { Text } from "./Text";

export const Footer = () => {
	return (
		<footer className="footer">
			<RowMain>
				<div className="footer__wrap">
					<p className="footer__info">
						<Logo />
					</p>
					<Text>&copy; {new Date().getFullYear()} veterinauvoz.cz</Text>
				</div>
			</RowMain>
		</footer>
	)
}