import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { AboutUsSection } from './sections/AboutUsSection';
import { MaxWidth } from './layout/MaxWidth';
import { Text } from './Text';


export const AboutUs = () => {
  return (
    <div className="u-pt-md">
      <AboutUsSection spacing="md">
        <RowMain>
          <PawDivider heading="Vítejte!" />
          <MaxWidth isCenter variant="10-12">
            <Text horizontalAlign="center">
              Jmenuji se <strong>Klára Palicová</strong> a můj pes je pro mě v
              životě mým nepostradatelným parťákem a&nbsp;miláčkem. Od&nbsp;roku 2013 se věnuji veterinární medicíně zejména{' '}
              <strong>psů a koček</strong>. V profesním životě jsem pracovala
              převážně na NON-STOP klinikách, kde jsem viděla a ošetřila široké spektrum případů.
            </Text>
            <Text horizontalAlign="center">
              Své vědomosti a zkušenosti využiji při léčbě Vašich čtyřnohých
              společníků. Budu se jim věnovat s péčí, jakoby byli{' '}
              <strong>&#8222;moji vlastní&#8220;</strong> v příznivé otevírací
              době a to i víkendech.
            </Text>
            <Text horizontalAlign="center">
              Problémy Vašich mazlíčků budeme řešit společně a v případě
              nutnosti úzce-specializovaného vyšetření zajistím objednání ke
              specialistovi, k co možná nejlepší spokojenosti Vás i Vašich
              miláčků &ndash; protože o ně tady kráčí&hellip;
            </Text>
          </MaxWidth>
        </RowMain>
      </AboutUsSection>
    </div>
  );
};
