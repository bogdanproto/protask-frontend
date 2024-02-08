export const selectAuthUser = state => state.authUser;

export const selectUser = state => state.authUser.user;

export const selectUpdating = state => state.authUser.isUpdating;

export const selectThemeUser = state => state.authUser.user.theme;
