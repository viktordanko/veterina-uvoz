import { RowMain } from './Layout/RowMain';
import { MapSection } from './sections/MapSection';
import { GMap } from './GMap';


export const Map = () => {
  return (
    <MapSection>
      <RowMain>
        <GMap spacing="xxl" />
      </RowMain>
    </MapSection>
  );
};
