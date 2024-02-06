import { useRef } from 'react';
import { ProfileAvatar } from 'components/EditProfile/index.js';
import { ProfileIconWrap } from './ProfileIcon.styled';

export const ProfileIcon = ({ onChange }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };


  
  return (
    <ProfileIconWrap>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <ProfileAvatar />
      </div>

      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onChange}
      />
      <label htmlFor="fileInput" />
    </ProfileIconWrap>
  );
};
