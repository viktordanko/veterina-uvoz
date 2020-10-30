import Link from 'next/link'
import classNames from "classnames";

export const MenuLink = ({
  children,
  href,
  isActive = false,
  asBtn = false,
  ...anchorProps
}) => {
  const classes = classNames(
    "m-main__link",
    isActive ? "is-active" : "",
    asBtn ? "btn btn--sm" : ""
  );

  if (asBtn) {
    return (
      <Link href={href} passHref>
        <a className={classes} {...anchorProps}>
          <span className="btn__text">{children}</span>
        </a>
      </Link>
    );
  }
  return (
    <Link href={href} passHref>
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    </Link>
  );
};
