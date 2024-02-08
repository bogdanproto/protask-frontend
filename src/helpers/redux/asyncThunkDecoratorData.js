import { errorNotify } from 'const';
import { handleError } from 'helpers/error/handleError';
import { setErrorAuth } from 'redux/authSlice/reducers';

export const asyncThunkDecoratorData = operation => async (arg, thunkAPI) => {
  try {
    return await operation(arg);
  } catch (error) {
    if (error.response?.data?.code === errorNotify.user_unauthorized_token) {
      thunkAPI.dispatch(setErrorAuth());
    }

    return thunkAPI.rejectWithValue(handleError(error.response?.data));
  }
};
