import classNames from 'classnames';
import days from '../api/opening-hours.json';
import { PawDivider } from './PawDivider';


export const OpeningHoursTable = () => {
  const classes = classNames('b-opening');

  return (
    <div className={classes}>
      <PawDivider heading="Ordinační hodiny" />
      <table className="b-opening__table">
        <tbody>
          {days.map((day, index) => {
            const { name, from, to, colSpan } = day;

            if (colSpan) {
              return (
                <tr key={index}>
                  <th>{name}</th>
                  <td colSpan={colSpan}>{from}</td>
                </tr>
              )
            }
            return (
              <tr key={index}>
                <th>{name}</th>
                <td colSpan={colSpan}>{from}</td>
                <td>{to}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
