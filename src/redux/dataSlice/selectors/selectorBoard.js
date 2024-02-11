import { createSelector } from 'reselect';

export const selectAllBoard = state => state.data.boards;

export const selectActiveBoard = state =>
  state.data.boards.find(board => board.isActive);

export const selectIsBoardsUploaded = createSelector(
  [selectAllBoard],
  boards => {
    return boards.length ? true : false;
  }
);
