import { createSelector } from '@reduxjs/toolkit';

export const isLoadingSelectorData = state => state.data.isLoading;
export const errorSelectorData = state => state.data.error;
export const succesMsgSelectorData = state => state.data.successMsg;

export const isLoadingSelectorUser = state => state.authUser.isLoading;
export const errorSelectorUser = state => state.authUser.errorAuth;
export const succesMsgSelectorUser = state => state.authUser.successMsg;

export const notifySelector = createSelector(
  [
    isLoadingSelectorData,
    errorSelectorData,
    succesMsgSelectorData,
    isLoadingSelectorUser,
    errorSelectorUser,
    succesMsgSelectorUser,
  ],
  (
    isLoadingData,
    errorData,
    succesMsgData,
    isLoadingUser,
    errorUser,
    succesMsgUser
  ) => ({
    error: errorData || errorUser,
    isLoading: isLoadingData || isLoadingUser,
    succesMsg: succesMsgUser || succesMsgData,
  })
);
