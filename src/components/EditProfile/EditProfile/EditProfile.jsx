import { FormEditProfile, ProfileIcon } from '..';
import { EditProfileTitle } from './EditProfile.styled';

export const EditProfile = ({...props}) => {
  return (
    <>
      <EditProfileTitle>Edit profile</EditProfileTitle>
      <ProfileIcon />
      <FormEditProfile {...props}/>
    </>
  );
};
