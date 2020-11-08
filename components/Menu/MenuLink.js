import classNames from "classnames";

export const MenuLink = ({
  children,
  href,
  isActive = false,
  onClick,
}) => {

  const classes = classNames(
    "m-main__link",
    isActive ? "is-active" : "",
  );

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
};
