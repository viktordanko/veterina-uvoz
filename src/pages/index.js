import Footer from '@components/Footer'
import Header from '@components/Header'
import Head from 'next/head'

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Next Veterina Úvoz!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}
