import classNames from 'classnames';


export const Text = ({ children, horizontalAlign, color, size }) => {
  const className = classNames(
    horizontalAlign == 'center'
      ? 'u-text-center'
      : horizontalAlign == 'right'
        ? 'u-text-right'
        : undefined,
    color ? `u-color-${color}` : false,
    size ? `u-font-${size}` : false
  );

  return <p className={className}>{children}</p>;
};
