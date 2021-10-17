import { useRouter } from "next/router"
import Link from 'next/link';


export const LocaleSwitcher = () => {
	const router = useRouter();
	const { locales, locale: activeLocale } = router;
	const otherLocales = locales.filter((locale) => locale !== activeLocale);

	return (
		otherLocales.map((locale, idx) => {
			const { pathname, query, asPath } = router;
			return (
				<Link href={{ pathname, query }} as={asPath} locale={locale} key={idx}>
					<a className="btn btn--lang">
						<span className="btn__inner">
							{locale === 'en-US' ? locale.replace('en-US', 'EN') : locale.toUpperCase()}
						</span>
					</a>
				</Link>
			)
		})
	)
}