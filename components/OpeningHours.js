import React from 'react';
import { RowMain } from './Layout/RowMain';
import { OpeningHoursSection } from './sections/OpeningHoursSection';
import { OpeningHoursTable } from './OpeningHoursTable';


export const OpeningHours = () => {
  return (
    <OpeningHoursSection id="open-hours">
      <RowMain>
        <OpeningHoursTable />
      </RowMain>
    </OpeningHoursSection>
  );
};
