import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthToken, signUpAPI } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const signUpUser = createAsyncThunk(
  'authUser/signUpUser',
  asyncThunkDecoratorUser(async obj => {
    const {
      data: { token, user },
    } = await signUpAPI(obj);
    setAuthToken(token);

    return {
      user,
      token,
    };
  })
);
