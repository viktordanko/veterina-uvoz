import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { WhyUsSection } from './sections/WhyUsSection';
import { List } from './List';
import { ListItem } from './ListItem';
import { Benefits } from './Benefits';
import { TimeClock } from './Icons/TimeClock';
import { HourGlass } from './Icons/HourGlass';
import { Vet } from './Icons/Vet';


export const WhyUs = () => {
  return (
    <RowMain>
      <WhyUsSection>
        <Benefits spacing="xxl">
          <PawDivider heading="Proč k nám?" />
          <List isGrid variant="center" spacingX="lg" spacingY="lg">
            <ListItem
              isGridCell
              center
              mdSize={3}
              listIcon={<TimeClock size={50} />}
              description="Jste pracující a nestíháte se&nbsp;svým&nbsp;miláčkem zajít k&nbsp;veterináři?"
            />
            <ListItem
              isGridCell
              center
              mdSize={3}
              listIcon={<HourGlass size={50} />}
              description="Máte pocit, že Váš mazlíček je pouze další v&nbsp;řadě a&nbsp;veterinář na&nbsp;Vás nemá dostatek času?"
            />
            <ListItem
              isGridCell
              center
              mdSize={3}
              listIcon={<Vet size={50} />}
              description="Nemáte rádi, když Vašeho miláčka pokaždé ošetřuje někdo&nbsp;jiný?​"
            />
          </List>
        </Benefits>
      </WhyUsSection>
    </RowMain>
  );
};
