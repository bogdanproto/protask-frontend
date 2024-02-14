import { createSelector } from '@reduxjs/toolkit';

export const selectAuthUser = state => state.authUser;

export const selectUser = state => state.authUser.user;

export const selectUpdating = state => state.authUser.isUpdating;

export const selectThemeUser = state => state.authUser.user.theme;

export const selectWithAdaptSelector = createSelector(
  [selectThemeUser],
  value => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
  })
);
