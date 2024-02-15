import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setSuccesMsgData } from '../reducers';
import {
  addBoard,
  addCard,
  addColumn,
  changeCardsColumn,
  deleteBoard,
  deleteCard,
  deleteColumn,
  getAllBoards,
  getAllColumns,
  getBoardById,
  getColumnById,
  sendToHelpDesk,
  updateBoard,
  updateCard,
  updateColumn,
} from '../operations';
import {
  handleFulfilledAddBoard,
  handleFulfilledAddColumn,
  handleFulfilledDeleteBoard,
  handleFulfilledDeleteColumn,
  handleFulfilledGetAllBoards,
  handleFulfilledGetAllColumns,
  handleFulfilledGetBoardById,
  handleFulfilledGetColumnById,
  handleFulfilledHelpDesk,
  handleFulfilledUpdateBoard,
  handleFulfilledUpdateColumn,
  handleLogoutData,
  handlePendingData,
  handlePendingDataWLoader,
  handleRejectedData,
} from '../handleStatus';
import {
  handleFulfilleDeleteCard,
  handleFulfilleUpdateCard,
  handleFulfilledAddCard,
  handleFulfilledChangeCardsColumn,
} from '../handleStatus/handleCard';
import { logOutUser } from 'redux/authSlice/operations';

const initialState = {
  boards: [],
  boardStatus: {
    activeBoard: null,
    isBoardLoaded: false,
  },
  columns: null,
  error: null,
  isLoading: null,
  successMsg: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toSetSuccesMsgData: setSuccesMsgData,
    toSetActiveBoard: (state, action) => {
      state.activeBoard = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logOutUser.fulfilled, handleLogoutData)
      .addCase(sendToHelpDesk.fulfilled, handleFulfilledHelpDesk)
      .addCase(addBoard.fulfilled, handleFulfilledAddBoard)
      .addCase(deleteBoard.fulfilled, handleFulfilledDeleteBoard)
      .addCase(getAllBoards.fulfilled, handleFulfilledGetAllBoards)
      .addCase(getBoardById.fulfilled, handleFulfilledGetBoardById)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdateBoard)
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(getAllColumns.fulfilled, handleFulfilledGetAllColumns)
      .addCase(getColumnById.fulfilled, handleFulfilledGetColumnById)
      .addCase(updateColumn.fulfilled, handleFulfilledUpdateColumn)
      .addCase(addCard.fulfilled, handleFulfilledAddCard)
      .addCase(changeCardsColumn.fulfilled, handleFulfilledChangeCardsColumn)
      .addCase(deleteCard.fulfilled, handleFulfilleDeleteCard)
      .addCase(updateCard.fulfilled, handleFulfilleUpdateCard)
      .addCase(changeCardsColumn.pending, handlePendingDataWLoader)
      .addMatcher(
        isAnyOf(
          sendToHelpDesk.pending,
          addBoard.pending,
          deleteBoard.pending,
          getAllBoards.pending,
          getBoardById.pending,
          updateBoard.pending,
          addColumn.pending,
          deleteColumn.pending,
          getAllColumns.pending,
          getColumnById.pending,
          updateColumn.pending,
          addCard.pending,
          deleteCard.pending,
          updateCard.pending
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
          updateBoard.rejected,
          addColumn.rejected,
          deleteColumn.rejected,
          getAllColumns.rejected,
          getColumnById.rejected,
          updateColumn.rejected,
          addCard.rejected,
          changeCardsColumn.rejected,
          deleteCard.rejected,
          updateCard.rejected
        ),
        handleRejectedData
      );
  },
});

export const dataReducer = dataSlice.reducer;
export const { toSetSuccesMsgData, toSetActiveBoard } = dataSlice.actions;
