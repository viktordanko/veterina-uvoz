import classNames from "classnames";


export const ContactSection = ({ children, spacing }) => {
  const classes = classNames(
    "s-contact",
    spacing ? `u-mb-${spacing}` : ""
  );
  return <section className={classes}>{children}</section>;
};
