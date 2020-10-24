import classNames from "classnames";


export const OpeningHoursSection = ({ children, spacing }) => {
  const classes = classNames(
    "s-opening-hours",
    spacing ? `u-mb-${spacing}` : ""
  );
  return <section className={classes}>{children}</section>;
};
