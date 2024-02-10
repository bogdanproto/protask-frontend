import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInAPI, setAuthToken } from 'api';
import { asyncThunkDecoratorUser } from 'helpers';

export const logInUser = createAsyncThunk( 
  'authUser/logInUser',
  asyncThunkDecoratorUser(async obj => {
    const {
      data: { token, user },
    } = await logInAPI(obj);
    setAuthToken(token);

    return {
      user,
      token,
    };
  })
);
