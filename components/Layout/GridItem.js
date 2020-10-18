import classNames from 'classnames';

export const GridItem = ({
  children,
  align,
  size,
  smSize,
  mdSize,
  lgSize,
  xlSize,
}) => {
  const className = classNames(
    'grid__cell',
    size
      ? `size--${size}${size !== 'auto' &&
        size !== 'side' &&
        size !== 'content' &&
        size !== 'autogrow'
        ? '-12'
        : ''
      }`
      : false,
    smSize ? `size--${smSize}${smSize !== 'auto' ? '-12' : ''}@sm` : false,
    mdSize ? `size--${mdSize}${mdSize !== 'auto' ? '-12' : ''}@md` : false,
    lgSize ? `size--${lgSize}${lgSize !== 'auto' ? '-12' : ''}@lg` : false,
    xlSize ? `size--${xlSize}${xlSize !== 'auto' ? '-12' : ''}@xl` : false,
    align ? `grid__cell--${align}` : false
  );

  return <div className={className}>{children}</div>;
};
