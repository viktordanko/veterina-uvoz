import classNames from 'classnames';
import { RowMain } from "./Layout/RowMain";
import { Text } from "./Text";

export const Intro = ({ spacing }) => {
  const classes = classNames('b-intro', spacing ? `u-mb-${spacing}` : false)
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
        </div>
      </RowMain>
    </div>
  );
};
