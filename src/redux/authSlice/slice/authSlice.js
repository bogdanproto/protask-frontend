import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setSuccesMsgUser } from '../reducers';

import {
  handleFulfilledAvatar,
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledProfile,
  handleFulfilledRefresh,
  handleFulfilledSignUp,
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

const initialState = {
  user: { name: null, email: null, avatarCloudURL: null },
  token: null,
  isLoggedIn: false,
  errorAuth: null,
  successMsg: null,
  isLoading: null,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setSuccesMsgUser: setSuccesMsgUser,
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, handleFulfilledSignUp)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(updUserAvatar.fulfilled, handleFulfilledAvatar)
      .addCase(updUserProfile.fulfilled, handleFulfilledProfile)
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          logInUser.pending,
          logOutUser.pending,
          refreshUser.pending,
          updUserAvatar.pending,
          updUserProfile.pending
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
          updUserProfile.rejected
        ),
        handleRejectedAuth
      );
  },
});

export const authReducer = authSlice.reducer;
