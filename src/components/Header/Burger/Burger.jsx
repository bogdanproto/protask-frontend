import sprite from 'data/svg/sprite.svg';
import { Menu } from './Burger.styled';

export const Burger = () => {

  const handleClick = () => {
    console.log(`it's burger click`);
  };

  return (
    <Menu>
      <button
        onClick={handleClick}
        className="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg className="burger-icon" width="32" height="22">
          <use href={sprite + '#icon-menu'}></use>
        </svg>
      </button>
    </Menu>
  );
};
