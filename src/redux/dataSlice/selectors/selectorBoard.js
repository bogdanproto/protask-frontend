export const selectAllBoard = state => state.data.boards;

export const selectActiveBoard = state =>
  state.data.boards.find(board => board.isActive);
