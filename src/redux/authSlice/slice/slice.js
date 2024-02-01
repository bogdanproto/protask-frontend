const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  errorAuth: null,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
