import { successNotify } from 'const';

//--------------SignUp User-----------------
export const handleFulfilledSignUp = (state, action) => {
  const { user, token } = action.payload;

  state.isLoading = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//--------------LogIn User-----------------

export const handleFulfilledLogIn = (state, action) => {
  const { user, token } = action.payload;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//--------------LogOut User-----------------

export const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null, avatar: null, theme: 'light' };
  state.token = null;
  state.isLoggedIn = false;
  state.errorAuth = null;
  state.isLoading = false;
};

// --------------Refresh User-----------------

export const handleFulfilledRefresh = (state, action) => {
  const { user, token } = action.payload;
  state.isLoading = false;
  state.errorAuth = null;
  state.isLoggedIn = true;
  state.isUpdating = false;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//--------------Avatar User-----------------

export const handleFulfilledAvatar = (state, action) => {
  const { avatarCloudURL } = action.payload;
  state.user.avatarCloudURL = avatarCloudURL;

  state.isLoading = false;
  state.errorAuth = null;
};

//--------------Profile User-----------------

export const handleFulfilledProfile = (state, action) => {
  state.user = { ...state.user, ...action.payload };

  state.successMsg = successNotify.PROFILE;
  state.isLoading = false;
  state.errorAuth = null;
};

//--------------Theme User-----------------

export const handleFulfilledTheme = (state, action) => {
  const { theme } = action.payload;
  state.user.theme = theme;

  state.isLoading = false;
  state.errorAuth = null;
};

//---------------Pending and Rejected-------------------
export const handlePendingAuth = state => {
  state.isLoading = true;
  state.errorAuth = null;
};

export const handleRejectedAuth = (state, action) => {
  state.isLoading = false;
  state.errorAuth = action.payload;
};

//---------------Pending and Rejected RefreshUser-------------------
export const handlePendingRefreshAuth = state => {
  state.isLoading = true;
  state.errorAuth = null;
  state.isUpdating = true;
};

export const handleRejectedRefreshAuth = (state, action) => {
  state.isLoading = false;
  state.isUpdating = false;
  state.errorAuth = action.payload;
};
