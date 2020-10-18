import classNames from 'classnames';

export const GridList = ({ children, variant, align, spacingX, spacingY }) => {
  const classes = classNames(
    'grid grid--list',
    variant ? `grid--${variant}` : false,
    spacingX ? `grid--x-${spacingX}` : false,
    spacingY ? `grid--y-${spacingY}` : false,
    align ? `grid--${align}` : false
  );

  return <ul className={classes}>{children}</ul>;
};
