import classNames from 'classnames';


export const AboutUsSection = ({ children, spacing, id }) => {
  const classes = classNames('s-about-us', spacing ? `u-mb-${spacing}` : false);
  return <section className={classes} id={id}>{children}</section>;
};
