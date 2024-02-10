import sprite from 'data/svg/sprite.svg';
import { ProfileIconBtn } from './ProfileAvatar.styled';
import { useSelector } from 'react-redux';

export const ProfileAvatar = () => {  
  let avatarUrl = useSelector(state => state.authUser.user.avatarCloudURL);

  return (
    <ProfileIconBtn>
      {avatarUrl? <img src={avatarUrl} alt=""className="edit-profile-icon" width="68" height="68"></img>:
      <svg className="edit-profile-icon" width="68" height="68">
        <use href={sprite + '#icon-user'}></use>
      </svg>}
      <svg className="burger-icon-plus" width="24" height="24">
        <use href={sprite + '#icon-plus'}></use>
      </svg>
    </ProfileIconBtn>
  );
};
