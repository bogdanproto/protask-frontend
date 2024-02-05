import sprite from 'data/svg/sprite.svg';
import { ProfileIconBtn } from './ProfileIcon.styled';

export const ProfileIcon = () => {
    
    return ( 
        <ProfileIconBtn type="submit">
        <svg className="burger-icon" width="68" height="68">
          <use href={sprite + '#icon-user'}></use>
        </svg>
        <svg className="burger-icon-plus" width="24" height="24">
          <use href={sprite + '#icon-plus'}></use>
        </svg>
      </ProfileIconBtn>
     );
}
 
