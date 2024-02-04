import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserAvatarAPI } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const updUserAvatar = createAsyncThunk(
  'authUser/updateUserAvatar',
  asyncThunkDecoratorUser(async file => {
    const {
      user: { avatarCloudURL },
    } = await updateUserAvatarAPI(file);

    return { avatarCloudURL };
  })
);
