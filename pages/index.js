import { AboutUs } from '@components/AboutUs'
import { OpeningHours } from '@components/OpeningHours'
import { WhyUs } from '@components/WhyUs'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Intro } from 'components/Intro'
import { Main } from 'components/Main'
import { Map } from 'components/Map'
import Head from 'next/head'
import { Contact } from '@components/Contact'


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Veterina V.I.Pet | MVDr. Klára Palicová</title>
        <meta
          key="description"
          name="description"
          content="Veterinární ordinace V.I.Pet na Úvoze, Brno"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content="Veterinární ordinace V.I.Pet na Úvoze, Brno"
        />
        <meta
          key="og:description"
          property="og:description"
          content="...protože každý mazlíček je důležitý"
        />
        <meta
          key="og:image"
          property="og:image"
          content="/og-vipet.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Main>
        <Intro spacing="xl" />
        <AboutUs />
        <OpeningHours />
        <WhyUs />
        <Contact />
        <Map />
      </Main>
      <Footer />
    </>
  )
}
