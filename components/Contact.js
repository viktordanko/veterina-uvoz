import React from 'react';
import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { ContactSection } from './sections/ContactSection';
import { ContactInfo } from './ContactInfo';


export const Contact = () => {
  return (
    <>
      <div className="u-bg-primary-light u-pt-md">
        <RowMain>
          <ContactSection id="contact">
            <PawDivider heading="Kontaktní informace" />
            <ContactInfo spacing="xxl" />
          </ContactSection >
        </RowMain>
      </div>
    </>
  );
};
