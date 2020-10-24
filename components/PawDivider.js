import { Paw } from "./Icons/Paw";


export const PawDivider = ({ heading }) => {
  return (
    <div className="paw-divider">
      <h2 className="paw-divider__title">{heading}</h2>
      <span className="paw-divider__icon">
        <Paw fill="#3b559a" />
      </span>
    </div>
  );
};
