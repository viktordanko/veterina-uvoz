import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getStaticProps(ctx) {
		const staticProps = await Document.getStaticProps(ctx)
		return { ...staticProps }
	}

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

export default MyDocument
