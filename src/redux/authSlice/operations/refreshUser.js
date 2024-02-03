import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshUserAPI, setAuthToken } from 'api';
import { errorNotify } from 'const';
import { handleError } from 'helpers';

export const refreshUser = createAsyncThunk(
  'authUser/refreshUser',
  async (_, thunkAPI) => {
    try {
      const {
        authUser: { token },
      } = thunkAPI.getState();

      if (!token) {
        return thunkAPI.rejectWithValue(
          handleError({
            code: errorNotify.user_unauthorized_token,
          })
        );
      }

      setAuthToken(token);

      const { user } = await refreshUserAPI();
      return {
        user,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error.response?.data));
    }
  }
);