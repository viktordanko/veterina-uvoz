import classNames from "classnames";


export const Announcement = ({ children, spacing }) => {
  const classes = classNames(
    'b-announcement',
    spacing ? `u-mb-${spacing}` : false
  )
  return (
    <div className={classes}>
      <div className="row-main">
        <div className="b-announcement__text">
          {children}
        </div>
      </div>
    </div>
  );
};
