import { AboutUs } from '@components/AboutUs'
import { OpeningHours } from '@components/OpeningHours'
import { WhyUs } from '@components/WhyUs'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Intro } from 'components/Intro'
import { Main } from 'components/Main'
import Head from 'next/head'


export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Next Veterina Úvoz!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <Intro />
        <AboutUs />
        <OpeningHours />
        <WhyUs />
      </Main>
      <Footer />
    </>
  )
}
