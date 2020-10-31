import classNames from "classnames";


export const Benefits = ({ children, spacing }) => {
  const classes = classNames(
    'b-benefits',
    spacing ? `u-mb-${spacing}` : false
  )
  return (
    <div className={classes}>
      {children}
    </div>
  );
};
