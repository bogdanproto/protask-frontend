import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserThemeAPI } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const updUserTheme = createAsyncThunk(
  'authUser/updateUserTheme',
  asyncThunkDecoratorUser(async obj => {
    const { data } = await updateUserThemeAPI(obj);
    return data;
  })
);
