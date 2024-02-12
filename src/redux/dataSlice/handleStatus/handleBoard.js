import { successNotify } from 'const';

export const handleFulfilledGetAllBoards = (state, action) => {
  state.boards = action.payload.map(item => ({ ...item, isActive: false }));

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGetBoardById = (state, action) => {
  const { columns, _id } = action.payload;

  state.boards = [...state.boards].map(item =>
    item._id === _id
      ? { ...item, isActive: true }
      : { ...item, isActive: false }
  );

  state.columns = columns;

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledAddBoard = (state, action) => {
  state.boards = [action.payload, ...state.boards];

  state.successMsg = successNotify.BOARD_ADD;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledUpdateBoard = (state, action) => {
  const newBoard = action.payload;
  state.boards = [...state.boards].map(item =>
    item._id === newBoard._id ? { ...newBoard, isActive: true } : item
  );

  state.successMsg = successNotify.BOARD_UPDATE;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledDeleteBoard = (state, action) => {
  const { _id } = action.payload;
  state.boards = [...state.boards].filter(item => item._id !== _id);

  state.successMsg = successNotify.BOARD_DELETE;
  state.isLoading = false;
  state.error = null;
};
