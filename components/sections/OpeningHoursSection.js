import classNames from "classnames";


export const OpeningHoursSection = ({ children, id, spacing }) => {
  const classes = classNames(
    "s-opening-hours",
    spacing ? `u-mb-${spacing}` : ""
  );

  return (
    <section className={classes} id={id}>
      {children}
    </section>
  );
};
