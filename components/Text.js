import classNames from 'classnames';


export const Text = ({ children, horizontalAlign, color, size, isBold }) => {
  const classes = classNames(
    horizontalAlign == 'center'
      ? 'u-text-center'
      : horizontalAlign == 'right'
        ? 'u-text-right'
        : undefined,
    color ? `u-color-${color}` : false,
    size ? `u-font-${size}` : false,
    isBold ? 'u-font-bold' : false
  );

  return <p className={classes}>{children}</p>;
};
