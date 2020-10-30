import React from 'react';
import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { ContactSection } from './sections/ContactSection';
import { ContactInfo } from './ContactInfo';


export const Contact = () => {
  return (
    <ContactSection>
      <RowMain>
        <PawDivider heading="Kontaktní informace" />
        <ContactInfo spacing="xxl" />
      </RowMain>
    </ContactSection >
  );
};
