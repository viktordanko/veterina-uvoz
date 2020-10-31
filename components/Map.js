import { RowMain } from './Layout/RowMain';
import { MapSection } from './sections/MapSection';
import { GMap } from './GMap';


export const Map = () => {
  return (
    <RowMain>
      <MapSection>
        <GMap spacing="xxl" />
      </MapSection>
    </RowMain>
  );
};
