import Link from 'next/link'
import classNames from "classnames";

export const MenuLink = ({
  children,
  href,
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
      <Link href={href}>
        <a className={classes} {...anchorProps}>
          <span className="btn__text">{children}</span>
        </a>
      </Link>
    );
  }
  return (
    <Link href={href}>
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    </Link>
  );
};
