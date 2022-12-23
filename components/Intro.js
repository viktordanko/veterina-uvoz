import React from 'react';
import classNames from 'classnames';
import { RowMain } from "./Layout/RowMain";
import { Text } from "./Text";
// import { useTranslation } from 'next-i18next';

export const Intro = ({ spacing }) => {
  const classes = classNames('b-intro', spacing ? `u-mb-${spacing}` : false)
  // const { t } = useTranslation();

  return (
    <div className={classes}>
      <RowMain>
        <div className="b-intro__inner"></div>
        <div className="b-intro__content">
          <h1>
            Veterina V.I.Pet
            <br />
            Very Important Pet
          </h1>
          <Text isBold>...protože každý mazlíček je důležitý</Text>
          {/* <Text isBold>{t('intro.desc')}</Text> */}
        </div>
      </RowMain>
    </div>
  );
};
