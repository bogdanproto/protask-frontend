import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setErrorAuth, setSuccesMsgUser } from '../reducers';

import {
  handleFulfilledAvatar,
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledProfile,
  handleFulfilledRefresh,
  handleFulfilledSignUp,
  handleFulfilledTheme,
  handlePendingAuth,
  handleRejectedAuth,
} from '../handleStatus';
import {
  logInUser,
  logOutUser,
  refreshUser,
  signUpUser,
  updUserAvatar,
  updUserProfile,
} from '../operations';
import { updUserTheme } from '../operations/updUserTheme';

const initialState = {
  user: { name: null, email: null, avatarCloudURL: null, theme: 'light' },
  token: null,
  isLoggedIn: true,
  errorAuth: null,
  successMsg: null,
  isLoading: null,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setSuccesMsgUser: setSuccesMsgUser,
    setErrorAuth: setErrorAuth,
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, handleFulfilledSignUp)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(updUserAvatar.fulfilled, handleFulfilledAvatar)
      .addCase(updUserProfile.fulfilled, handleFulfilledProfile)
      .addCase(updUserTheme.fulfilled, handleFulfilledTheme)
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          logInUser.pending,
          logOutUser.pending,
          refreshUser.pending,
          updUserAvatar.pending,
          updUserProfile.pending,
          updUserTheme.pending
        ),
        handlePendingAuth
      )
      .addMatcher(
        isAnyOf(
          signUpUser.rejected,
          logInUser.rejected,
          logOutUser.rejected,
          refreshUser.rejected,
          updUserAvatar.rejected,
          updUserProfile.rejected,
          updUserTheme.rejected
        ),
        handleRejectedAuth
      );
  },
});

export const authReducer = authSlice.reducer;
