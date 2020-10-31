import classNames from "classnames";


export const Annot = ({ children, spacing }) => {
  const classes = classNames(
    'b-annot',
    spacing ? `u-mb-${spacing}` : false
  )
  return (
    <div className={classes}>
      {children}
    </div>
  );
};
