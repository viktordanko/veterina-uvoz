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
          {days.map((day, index) => (
            <tr key={index}>
              <th>{day.name}</th>
              <td>{day.from}</td>
              <td>{day.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
