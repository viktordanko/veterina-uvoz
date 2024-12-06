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
import { Announcement } from '@components/Announcement'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { useTranslation } from 'react-i18next'


const Home = () => {
  // const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Veterina V.I.Pet | MVDr. Klára Palicová</title>
        <meta
          key="description"
          name="description"
          content="Veterinární ordinace V.I.Pet na Úvoze, Brno"
        // content={t('metas.content')}
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content="Veterinární ordinace V.I.Pet na Úvoze, Brno"
        // content={t('metas.content')}
        />
        <meta
          key="og:description"
          property="og:description"
          content="...protože každý mazlíček je důležitý"
        // content={t('metas.desc')}
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
      <Announcement>
        <strong>Pozor, změna otevíracích hodin. <br /></strong>
        👉 <a className='u-color-white' href="#open-hours">Pro více info klikněte zde 👈</a>
      </Announcement>
      {/* <Announcement>
        V termínu <strong>23. 12 - 30. 12. 2022</strong> je ordinace <strong>zavřená</strong>.
      </Announcement> */}
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

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common']),
//   },
// })

export default Home;