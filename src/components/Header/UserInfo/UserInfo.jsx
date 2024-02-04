import { useSelector } from 'react-redux';
import { HeaderAvatar } from './UserInfo.styled';
import sprite from 'data/svg/sprite.svg';

const UserInfo = () => {
  let userName = useSelector(state => state.authUser.user.userName);
if(!userName){
  userName = "Lolita"
}
  const buttonClick = () => {    
    console.log("its button");
  };
  return (
    <HeaderAvatar>
      <span>{userName}</span>
      <button
        onClick={buttonClick}
        className="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg className="burger-icon" width="32" height="32">
          <use href={sprite + '#icon-user'}></use>
        </svg>
      </button>
    </HeaderAvatar>
  );
};

export default UserInfo;
