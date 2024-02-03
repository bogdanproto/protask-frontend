import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserThemeAPI } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const updUserTheme = createAsyncThunk(
  'authUser/updateUserTheme',
  asyncThunkDecoratorUser(async obj => {
    const { user } = await updateUserThemeAPI(obj);
    return user;
  })
);
