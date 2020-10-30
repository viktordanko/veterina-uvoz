import classNames from 'classnames';


export const GMap = ({ spacing }) => {
  const classes = classNames('b-map', spacing ? `u-mb-${spacing}` : '');
  return (
    <div className={classes}>
      <div className="b-map__holder">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.450138083574!2d16.593749515611755!3d49.19201978511139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712950d1b6e2297%3A0xeff55a3036f2040b!2sVeterina%20V.I.Pet%20-%20Very%20Importan%20Pet!5e0!3m2!1scs!2scz!4v1598784672442!5m2!1scs!2scz"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  );
};
