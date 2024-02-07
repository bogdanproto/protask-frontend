import { useSelector } from 'react-redux';
import { HeaderAvatar } from './UserInfo.styled';
import sprite from 'data/svg/sprite.svg';
import { useState } from 'react';
import { ModalCloseButton } from 'components/Modal/ModalComponent/ModalComponent.styled';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { EditProfile } from 'components/EditProfile';

const UserInfo = () => {
  let userName = useSelector(state => state.authUser.user.userName);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if(!userName){
  userName = "Lolita"
}
  return (
    <HeaderAvatar>
      <UniversalModal isOpen={isOpen} onClose={closeModal}>
        <ModalCloseButton onClick={closeModal}><svg width="18" height="18" stroke="black">
          <use href={sprite + '#icon-x-close'}></use>
        </svg></ModalCloseButton>
        <EditProfile/>
      </UniversalModal>
      <span>{userName}</span>
      <button
        onClick={openModal}
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
