import sprite from 'data/svg/sprite.svg';
import { Menu } from './Burger.styled';

const Burger = () => {
  return (
    <Menu>
      <button
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

export default Burger;
