import classNames from 'classnames';


export const Grid = ({
  children,
  variant,
  align,
  spacingX,
  spacingY,
}) => {
  const classes = classNames(
    'grid',
    variant ? `grid--${variant}` : false,
    spacingX ? `grid--x-${spacingX}` : false,
    spacingY ? `grid--y-${spacingY}` : false,
    align ? `grid--${align}` : false
  );

  return <div className={classes}>{children}</div>;
};
