import { MenuLink } from './MenuLink';

const menuItems = [
  {
    label: 'Úvod',
    href: '/',
  },
  {
    label: 'O nás',
    href: 'about-us',
  },
  {
    label: 'Služby',
    href: 'services',
  },
  {
    label: 'Kontakt',
    href: 'contact',
  },
  {
    isPhoneButton: true,
    label: 'Volejte',
    href: 'tel:+420737112300',
  },
];

export const MenuList = () => {
  return (
    <ul className="m-main__list">
      {menuItems.map(({ label, href, isPhoneButton }, id) => {
        if (isPhoneButton) {
          return (
            <li className="m-main__item m-main__item--phone" key={id}>
              <MenuLink asBtn href={href}>
                {label}
              </MenuLink>
            </li>
          );
        }
        return (
          <li className="m-main__item" key={id}>
            <MenuLink href={href}>{label}</MenuLink>
          </li>
        );
      })}
    </ul>
  );
};

