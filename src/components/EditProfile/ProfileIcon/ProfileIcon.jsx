import { useEffect, useRef, useState } from 'react';
import { ProfileAvatar } from 'components/EditProfile/index.js';
import { ProfileIconWrap } from './ProfileIcon.styled';
import { useDispatch } from 'react-redux';
import { updUserAvatar } from 'redux/authSlice/operations/index.js';

export const ProfileIcon = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleFileChange = evt => setFile(evt.target.files[0]);

  useEffect(() => {
    if (file) {
      dispatch(updUserAvatar(file));
    }
  }, [file, dispatch]);

  return (
    <ProfileIconWrap>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <ProfileAvatar />
      </div>

      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" />
    </ProfileIconWrap>
  );
};
