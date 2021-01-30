import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="cs">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getStaticProps = async (ctx) => {
	const staticProps = await Document.getStaticProps(ctx)
	return { ...staticProps }
}