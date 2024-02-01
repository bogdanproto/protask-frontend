import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOutAPI, removeAuthToken } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const logOutUser = createAsyncThunk(
  'authUser/logOutUser',
  asyncThunkDecoratorUser(async () => {
    await logOutAPI();
    removeAuthToken();
  })
);
