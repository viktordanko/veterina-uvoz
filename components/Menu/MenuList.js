import Link from 'next/link';
import { MenuLink } from './MenuLink';

const menuItems = [
  {
    label: 'Úvod',
    href: '/',
  },
  {
    label: 'O nás',
    href: '#o-nas',
  },
  {
    label: 'Služby',
    href: '#sluzby',
  },
  {
    label: 'Kontakt',
    href: '#kontakt',
  },
  {
    isPhoneButton: true,
    label: '737 112 300',
    href: 'tel:+421737112300',
  },
];

export const MenuList = () => {
  return (
    <ul className="m-main__list">
      {menuItems.map(({ label, href, isPhoneButton }, id) => {
        if (isPhoneButton) {
          return (
            <li className="m-main__item m-main__item--phone" key={id}>
              <MenuLink isButton href={href}>
                {label}
              </MenuLink>
            </li>
          );
        }
        return (
          <li className="m-main__item" key={id}>
            <Link href="/[page]" as={`${href}`} passHref>
              <MenuLink>{label}</MenuLink>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};