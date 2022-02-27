import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { PawDivider } from './PawDivider';


export const OpeningHoursTable = () => {
  const classes = classNames('b-opening');
  const { t } = useTranslation();

  return (
    <div className={classes}>
      <PawDivider heading={t('openHours.title')} />
      {/* <p class="u-text-center u-color-red">
        V termínu <strong>4. 1 - 18. 1. 2022</strong> je ordinace zavřená.
      </p> */}
      <table className="b-opening__table">
        <tbody>
          <tr>
            <th>{t('openHours.monday')}</th>
            <td >9:00 - 11:00</td>
            <td>15:00 - 20:00</td>
          </tr>
          <tr>
            <th>{t('openHours.tuesday')}</th>
            <td>9:00 - 11:00</td>
            <td>15:00 - 20:00</td>
          </tr>
          <tr>
            <th>{t('openHours.wednesday')}</th>
            <td colSpan="2">{t('openHours.closed')}</td>
          </tr>
          <tr>
            <th>{t('openHours.thursday')}</th>
            <td colSpan="2">{t('openHours.booked')}</td>
          </tr>
          <tr>
            <th>{t('openHours.friday')}</th>
            <td>9:00 - 11:00</td>
            <td>19:00 - 20:00</td>
          </tr>
          <tr>
            <th>{t('openHours.saturday')}</th>
            <td>10:00 - 11:30</td>
            <td>15:00 - 18:30</td>
          </tr>
          <tr>
            <th>{t('openHours.sunday')}</th>
            <td>10:00 - 11:30</td>
            <td>15:00 - 18:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
