import React from 'react';


export const MenuButton = ({ menuOpened, setMenuOpened }) => {
  return (
    <button className="m-mobile-menu btn" data-text="Menu" aria-labelledby="mobileMenu" aria-expanded={menuOpened ? 'true' : 'false'} onClick={() => setMenuOpened(!menuOpened)}>
      <span className="m-mobile-menu__icon"></span>
      <span className="u-vhide" id="mobileMenu">Mobilní menu</span>
    </button>
  );
};
