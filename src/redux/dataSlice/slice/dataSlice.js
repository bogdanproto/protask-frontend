import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setSuccesMsgData } from '../reducers';
import {
  addBoard,
  deleteBoard,
  getAllBoards,
  getBoardById,
  sendToHelpDesk,
  updateBoard,
} from '../operations';
import {
  handleFulfilledAddBoard,
  handleFulfilledDeleteBoard,
  handleFulfilledGetAllBoards,
  handleFulfilledGetBoardById,
  handleFulfilledHelpDesk,
  handleFulfilledUpdateBoard,
  handlePendingData,
  handleRejectedData,
} from '../handleStatus';

const initialState = {
  boards: [],
  columns: [],
  error: null,
  isLoading: null,
  successMsg: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toSetSuccesMsgData: setSuccesMsgData,
  },
  extraReducers: builder => {
    builder
      .addCase(sendToHelpDesk.fulfilled, handleFulfilledHelpDesk)
      .addCase(addBoard.fulfilled, handleFulfilledAddBoard)
      .addCase(deleteBoard.fulfilled, handleFulfilledDeleteBoard)
      .addCase(getAllBoards.fulfilled, handleFulfilledGetAllBoards)
      .addCase(getBoardById.fulfilled, handleFulfilledGetBoardById)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdateBoard)
      .addMatcher(
        isAnyOf(
          sendToHelpDesk.pending,
          addBoard.pending,
          deleteBoard.pending,
          getAllBoards.pending,
          getBoardById.pending,
          updateBoard.pending
        ),
        handlePendingData
      )
      .addMatcher(
        isAnyOf(
          sendToHelpDesk.rejected,
          addBoard.rejected,
          deleteBoard.rejected,
          getAllBoards.rejected,
          getBoardById.rejected,
          updateBoard.rejected
        ),
        handleRejectedData
      );
  },
});

export const dataReducer = dataSlice.reducer;
export const { toSetSuccesMsgData } = dataSlice.actions;
