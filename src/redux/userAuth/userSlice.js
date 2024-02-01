import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logOutUser, refreshUser, signInUser } from './operations';
import {
  handleFulPendingSigInLogIn,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handleFulfilledSigInLogIn,
  handlePendingLogOut,
  handlePendingRefresh,
  handleRejectedLogOut,
  handleRejectedRefresh,
  handleRejectedSigInLogIn,
} from 'reduxFunctions/stateUserAuthChangers';

const userSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    errorAuth: { status: null, data: null },
    isRefreshing: null,
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, handleFulPendingSigInLogIn)
      .addCase(signInUser.fulfilled, handleFulfilledSigInLogIn)
      .addCase(signInUser.rejected, handleRejectedSigInLogIn)
      .addCase(logInUser.pending, handleFulPendingSigInLogIn)
      .addCase(logInUser.fulfilled, handleFulfilledSigInLogIn)
      .addCase(logInUser.rejected, handleRejectedSigInLogIn)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addCase(logOutUser.pending, handlePendingLogOut)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejectedLogOut);
  },
});

export const userReducer = userSlice.reducer;
