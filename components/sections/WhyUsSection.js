import classNames from "classnames";


export const WhyUsSection = ({ children, spacing }) => {
  const classes = classNames("s-why-us", spacing ? `u-mb-${spacing}` : null);
  return <section className={classes}>{children}</section>;
};
