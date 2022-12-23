import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { AboutUsSection } from './sections/AboutUsSection';
import { MaxWidth } from './Layout/MaxWidth';
import { Text } from './Text';
import { Annot } from './Annot';
// import { useTranslation } from 'react-i18next';


export const AboutUs = () => {
  // const { t } = useTranslation();

  return (
    <RowMain>
      <AboutUsSection id="about-us">
        <PawDivider heading="Vítejte!" />
        {/* <PawDivider heading={t('about.welcome')} /> */}
        <MaxWidth isCenter variant="10-12">
          <Annot spacing="xxxl">
            <Text>
              Jmenuji se Klára Palicová a můj pes je pro mě v životě mým nepostradatelným parťákem a miláčkem. Od roku 2013 se věnuji veterinární medicíně zejména psů a koček. V profesním životě jsem pracovala převážně na NON-STOP klinikách, kde jsem viděla a ošetřila široké spektrum případů.
              {/* {t('about.first')} */}
            </Text>
            <Text>
              Své vědomosti a zkušenosti využiji při léčbě Vašich čtyřnohých společníků. Budu se jim věnovat s péčí, jakoby byli moji vlastní v příznivé otevírací době a to i víkendech.
              {/* {t('about.second')} */}
            </Text>
            <Text>
              Problémy Vašich mazlíčků budeme řešit společně a v případě nutnosti úzce-specializovaného vyšetření zajistím objednání ke specialistovi, k co možná nejlepší spokojenosti Vás i Vašich miláčků - protože o ně tady kráčí…
              {/* {t('about.third')} */}
            </Text>
          </Annot>
        </MaxWidth>
      </AboutUsSection>
    </RowMain>
  );
};
