import { createSelector } from 'reselect';

export const selectAllBoard = state => state.data.boards;

export const selectActiveBoardId = state => state.data.boardStatus.activeBoard;

export const selectActiveBoardisLoaded = state =>
  state.data.boardStatus.isBoardLoaded;

export const selectActiveBoard = state =>
  state.data.boards.find(
    board => board._id === state.data.boardStatus.activeBoard
  );

export const selectIsBoardsUploaded = createSelector(
  [selectAllBoard],
  boards => {
    return boards.length ? true : false;
  }
);

export const selectIsBoardActiveAndLoaded = createSelector(
  [selectActiveBoardId, selectActiveBoardisLoaded],
  (id, isLoaded) => {
    return id && isLoaded ? true : false;
  }
);

export const selectIsBoardIdUploaded = state => state.data.columns;
