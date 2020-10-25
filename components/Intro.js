import { RowMain } from "./Layout/RowMain"

export const Intro = () => {
  return (
    <div className="b-intro">
      <div className="b-intro__inner">
        <RowMain>
          <div className="b-intro__content">
            <h1>
              Veterina V.I.Pet
              <br />
              Very Important Pet
            </h1>
            <p>...protože každý mazlíček je důležitý</p>
          </div>
        </RowMain>
      </div>
    </div>
  );
};
