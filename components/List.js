import classNames from "classnames";


export const List = ({
  children,
  isGrid,
  variant,
  align,
  spacingX,
  spacingY,
}) => {
  const classes = classNames(
    "c-list",
    isGrid ? `grid grid--list` : false,
    variant ? `grid--${variant}` : false,
    spacingX ? `grid--x-${spacingX}` : false,
    spacingY ? `grid--y-${spacingY}` : false,
    align ? `grid--${align}` : false
  );

  return <ul className={classes}>{children}</ul>;
};
