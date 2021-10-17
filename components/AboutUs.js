import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { AboutUsSection } from './sections/AboutUsSection';
import { MaxWidth } from './Layout/MaxWidth';
import { Text } from './Text';
import { Annot } from './Annot';
import { useTranslation } from 'react-i18next';


export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <RowMain>
      <AboutUsSection id="about-us">
        <PawDivider heading={t('about.welcome')} />
        <MaxWidth isCenter variant="10-12">
          <Annot spacing="xxxl">
            <Text>
              {t('about.first')}
            </Text>
            <Text>
              {t('about.second')}
            </Text>
            <Text>
              {t('about.third')}
            </Text>
          </Annot>
        </MaxWidth>
      </AboutUsSection>
    </RowMain>
  );
};
