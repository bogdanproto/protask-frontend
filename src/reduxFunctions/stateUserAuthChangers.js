//--------------LogIn and SignIn User-----------------

export const handleFulPendingSigInLogIn = state => {
  state.isRefreshing = true;
  state.errorAuth = { status: null, data: null };
};
export const handleFulfilledSigInLogIn = (state, action) => {
  const { user, token } = action.payload;
  state.isRefreshing = false;
  state.errorAuth = { status: null, data: null };
  state.token = token;
  state.user = user;
  state.isLoggedIn = true;
};
export const handleRejectedSigInLogIn = (state, action) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};

//--------------LogOut User-----------------

export const handlePendingLogOut = state => {
  state.isRefreshing = true;
  state.errorAuth = { status: null, data: null };
};

export const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.errorAuth = { status: null, data: null };
  state.isRefreshing = false;
};

export const handleRejectedLogOut = (state, action) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};

//--------------Refresh User-----------------
export const handlePendingRefresh = state => {
  state.isRefreshing = true;
  state.errorAuth = { status: null, data: null };
};

export const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.errorAuth = { status: null, data: null };
  state.isRefreshing = false;
};

export const handleRejectedRefresh = (state, action) => {
  state.isRefreshing = null;
  state.errorAuth = action.payload;
};
