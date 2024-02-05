import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setSuccesMsgData } from '../reducers';
import { sendToHelpDesk } from '../operations';
import {
  handleFulfilledHelpDesk,
  handlePendingData,
  handleRejectedData,
} from '../handleStatus';

const initialState = {
  tasks: [],
  error: null,
  isLoading: null,
  successMsg: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSuccesMsgData: setSuccesMsgData,
  },
  extraReducers: builder => {
    builder
      .addCase(sendToHelpDesk.fulfilled, handleFulfilledHelpDesk)
      .addMatcher(isAnyOf(sendToHelpDesk.pending), handlePendingData)
      .addMatcher(isAnyOf(sendToHelpDesk.rejected), handleRejectedData);
  },
});

export const dataReducer = dataSlice.reducer;
