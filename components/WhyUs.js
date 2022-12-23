import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { WhyUsSection } from './sections/WhyUsSection';
import { List } from './List';
import { ListItem } from './ListItem';
import { Benefits } from './Benefits';
import { TimeClock } from './Icons/TimeClock';
import { HourGlass } from './Icons/HourGlass';
import { Vet } from './Icons/Vet';
// import { useTranslation } from 'react-i18next';


export const WhyUs = () => {
  // const { t } = useTranslation();

  return (
    <RowMain>
      <WhyUsSection>
        <Benefits spacing="xxl">
          <PawDivider heading="Proč k nám?" />
          {/* <PawDivider heading={t('features.title')} /> */}
          <List isGrid variant="center" spacingX="lg" spacingY="lg">
            <ListItem
              isGridCell
              center
              mdSize={3}
              listIcon={<TimeClock size={50} />}
              description="Jste pracující a nestíháte se svým miláčkem zajít k veterináři?"
            // description={t('features.first')}
            />
            <ListItem
              isGridCell
              center
              mdSize={3}
              listIcon={<HourGlass size={50} />}
              description="Máte pocit, že Váš mazlíček je pouze další v řadě a veterinář na Vás nemá dostatek času?"
            // description={t('features.second')}
            />
            <ListItem
              isGridCell
              center
              mdSize={3}
              listIcon={<Vet size={50} />}
              description="Máte pocit, že Váš mazlíček je pouze další v řadě a veterinář na Vás nemá dostatek času?"
            // description={t('features.third')}
            />
          </List>
        </Benefits>
      </WhyUsSection>
    </RowMain>
  );
};
