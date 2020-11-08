import classNames from "classnames";


export const ContactSection = ({ children, spacing, id }) => {
  const classes = classNames(
    "s-contact",
    spacing ? `u-mb-${spacing}` : ""
  );
  return <section className={classes} id={id}>{children}</section>;
};