import React from 'react';
import { PawDivider } from './PawDivider';
import { RowMain } from './Layout/RowMain';
import { ContactSection } from './sections/ContactSection';
import { ContactInfo } from './ContactInfo';
// import { useTranslation } from 'react-i18next';


export const Contact = () => {
  // const { t } = useTranslation();
  return (
    <>
      <div className="u-bg-primary-light u-pt-xl">
        <RowMain>
          <ContactSection id="contact">
            <PawDivider heading="Kontaktní informace" />
            {/* <PawDivider heading={t('contact.title')} /> */}
            <ContactInfo spacing="xxl" />
          </ContactSection >
        </RowMain>
      </div>
    </>
  );
};
