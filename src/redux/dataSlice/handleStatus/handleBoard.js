import { successNotify } from 'const';

export const handleFulfilledGetAllBoards = (state, action) => {
  state.boards = action.payload;

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGetBoardById = (state, action) => {
  const { columns, _id } = action.payload;

  state.columns = columns;

  state.boardStatus = { activeBoard: _id, isBoardLoaded: true };

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledAddBoard = (state, action) => {
  const newBoard = action.payload;
  state.boards = [...state.boards, newBoard];

  state.successMsg = successNotify.BOARD_ADD;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledUpdateBoard = (state, action) => {
  const newBoard = action.payload;
  state.boards = [...state.boards].map(item =>
    item._id === newBoard._id ? newBoard : item
  );

  state.boardStatus = { activeBoard: newBoard._id, isBoardLoaded: true };

  state.successMsg = successNotify.BOARD_UPDATE;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledDeleteBoard = (state, action) => {
  const { _id } = action.payload;

  state.boards = [...state.boards].filter(item => item._id !== _id);
  state.columns = null;
  state.boardStatus = { activeBoard: null, isBoardLoaded: false };

  state.successMsg = successNotify.BOARD_DELETE;
  state.isLoading = false;
  state.error = null;
};
