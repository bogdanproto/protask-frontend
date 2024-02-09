import { handleError } from 'helpers/error/handleError';

export const asyncThunkDecoratorUser = operation => async (arg, thunkAPI) => {
  try {
    return await operation(arg);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleError(error.response?.data));
  }
};
