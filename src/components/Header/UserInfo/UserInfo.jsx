import { useSelector } from 'react-redux';
import { HeaderAvatar } from './UserInfo.styled';

const UserInfo = () => {
  const userName = useSelector(state => state.name.name);

  const buttonClick=()=>{
    console.log("is button")
  }
  return (
    <HeaderAvatar>
      <span>{userName}</span>
      <button onClick={buttonClick}
        class="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg class="burger-icon">
          <use href="./images/icons.svg#burger-btn"></use>
        </svg>
      </button>
    </HeaderAvatar>
  );
};

export default UserInfo;
