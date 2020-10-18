import classNames from "classnames";

export const MenuLink = ({
  children,
  isActive = false,
  isButton = false,
  ...anchorProps
}) => {
  const classes = classNames(
    "m-main__link",
    isActive ? "is-active" : "",
    isButton ? "btn btn--sm" : ""
  );

  if (isButton) {
    return (
      <a className={classes} {...anchorProps}>
        <span className="btn__text">{children}</span>
      </a>
    );
  }
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  );
};
