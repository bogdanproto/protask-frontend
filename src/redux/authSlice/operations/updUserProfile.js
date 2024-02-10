import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserProfileAPI } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const updUserProfile = createAsyncThunk(
  'authUser/updateUserProfile',
  asyncThunkDecoratorUser(async obj => {
    const { data } = await updateUserProfileAPI(obj);

    return data;
  })
);
