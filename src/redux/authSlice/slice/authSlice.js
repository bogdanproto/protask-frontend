import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  handleFulfilledAvatar,
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledProfile,
  handleFulfilledRefresh,
  handleFulfilledSignUp,
  handleFulfilledTheme,
  handlePendingAuth,
  handlePendingRefreshAuth,
  handleRejectedAuth,
  handleRejectedRefreshAuth,
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
import { setErrorAuth, setSuccesMsgUser } from '../reducers';

const initialState = {
  user: {  userName: null, email: null, avatarCloudURL: null, theme: 'light' },
  token: null,
  isLoggedIn: false,
  errorAuth: null,
  successMsg: null,
  isLoading: null,
  isUpdating: true,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    toSeSuccesMsgUser: setSuccesMsgUser,
    toSetErrorAuth: setErrorAuth,
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, handleFulfilledSignUp)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(updUserAvatar.fulfilled, handleFulfilledAvatar)
      .addCase(updUserProfile.fulfilled, handleFulfilledProfile)
      .addCase(updUserTheme.fulfilled, handleFulfilledTheme)
      .addCase(refreshUser.pending, handlePendingRefreshAuth)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefreshAuth)
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          logInUser.pending,
          logOutUser.pending,
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
          updUserAvatar.rejected,
          updUserProfile.rejected,
          updUserTheme.rejected
        ),
        handleRejectedAuth
      );
  },
});

export const { toSeSuccesMsgUser, toSetErrorAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
