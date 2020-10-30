import classNames from "classnames";


export const ListItem = ({
  listIcon,
  description,
  isGridCell,
  size,
  smSize,
  mdSize,
  lgSize,
  xlSize,
  align,
  center,
}) => {
  const classes = classNames(
    "b-list__item",
    isGridCell ? `grid__cell` : "",
    center ? `u-text-center` : "",
    size
      ? `size--${size}${size !== "auto" &&
        size !== "side" &&
        size !== "content" &&
        size !== "autogrow"
        ? "-12"
        : ""
      }`
      : false,
    smSize ? `size--${smSize}${smSize !== "auto" ? "-12" : ""}@sm` : false,
    mdSize ? `size--${mdSize}${mdSize !== "auto" ? "-12" : ""}@md` : false,
    lgSize ? `size--${lgSize}${lgSize !== "auto" ? "-12" : ""}@lg` : false,
    xlSize ? `size--${xlSize}${xlSize !== "auto" ? "-12" : ""}@xl` : false,
    align ? `grid__cell--${align}` : false
  );
  return (
    <li className={classes}>
      {listIcon && <span className="b-list__icon">{listIcon}</span>}
      {description && <span className="b-list__desc">{description}</span>}
    </li>
  );
};
