import classNames from 'classnames';


export const AboutUsSection = ({ children, spacing }) => {
  const classes = classNames('s-about-us', spacing ? `u-mb-${spacing}` : '');
  return <section className={classes}>{children}</section>;
};
