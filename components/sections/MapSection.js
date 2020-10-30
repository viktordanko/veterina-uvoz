import classNames from "classnames";


export const MapSection = ({ children, spacing }) => {
  const classes = classNames("s-map", spacing ? `u-mb-${spacing}` : null);
  return <section className={classes}>{children}</section>;
};
