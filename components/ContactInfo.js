import classNames from 'classnames';
import Link from 'next/link';
import { Text } from './Text';


export const ContactInfo = ({ spacing }) => {
  const classes = classNames('b-contact', spacing ? `u-mb-${spacing}` : '');
  return (
    <div className={classes}>
      <Text>
        Úvoz 507/4, 60200 Brno, Staré Brno
      </Text>
      <Text>
        <Link href="tel:+420737112300">
          <a>
            +420&nbsp;737&nbsp;112&nbsp;300
          </a>
        </Link>
      </Text>
      <Text>
        <Link href="mailto:veterina.uvoz4@gmail.com">
          <a>
            veterina.uvoz4@gmail.com
          </a>
        </Link>
      </Text>
    </div>
  );
};
