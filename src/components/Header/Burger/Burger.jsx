import sprite from 'data/svg/sprite.svg';
import { Menu } from './Burger.styled';
import { useDispatch } from 'react-redux';
import { switchVisibleSidebar } from 'redux/sidebarSlice';

export const Burger = () => {
const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(switchVisibleSidebar(true));
    console.log("burger click")
  };

  return (
    <Menu>
      <button
        onClick={handleClick}
        className="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg className="burger-icon" width="24" height="24">
          <use href={sprite + '#icon-burger_menu'}></use>
        </svg>
      </button>
    </Menu>
  );
};


