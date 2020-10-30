import classNames from "classnames";


export const Annot = ({ children, spacing }) => {
  const className = classNames(
    'b-annot',
    spacing ? `u-mb-${spacing}` : false
  )
  return (
    <div className={className}>
      {children}
    </div>
  );
};
