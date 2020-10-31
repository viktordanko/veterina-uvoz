import classNames from "classnames";


export const MaxWidth = ({
  children,
  variant = "6-12",
  isCenter = true,
}) => {
  const classes = classNames(
    variant ? `u-max-width--${variant}` : "",
    isCenter ? "u-mx-auto" : ""
  );
  return <div className={classes}>{children}</div>;
};
