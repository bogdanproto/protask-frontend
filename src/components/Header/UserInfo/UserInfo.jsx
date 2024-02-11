import { useSelector } from 'react-redux';
import { HeaderAvatar } from './UserInfo.styled';
import sprite from 'data/svg/sprite.svg';
import { useState } from 'react';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { EditProfile } from 'components/EditProfile';

const UserInfo = () => {
  let userName = useSelector(state => state.authUser.user.userName);
  let avatarUrl = useSelector(state => state.authUser.user.avatarCloudURL);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <HeaderAvatar>
      <UniversalModal isOpen={isOpen} onClose={closeModal}>
        <EditProfile closeModal={closeModal} />
      </UniversalModal>
      <span>{userName}</span>
      <button
        onClick={openModal}
        className="menu-toggle js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt=""
            className="edit-profile-icon"
            width="68"
            height="68"
          ></img>
        ) : (
          <svg className="edit-profile-icon" width="32" height="32">
            <use href={sprite + '#icon-user'}></use>
          </svg>
        )}
      </button>
    </HeaderAvatar>
  );
};

export default UserInfo;
