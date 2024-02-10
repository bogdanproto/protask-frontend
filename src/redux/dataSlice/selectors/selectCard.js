import { createSelector } from '@reduxjs/toolkit';
import { selectFilterCards } from 'redux/uiSlice/selectors';

export const selectAllCardsOfBoard = state => state.data.columns;

export const selectFilteredCardsOfBoard = createSelector(
  [selectFilterCards, selectAllCardsOfBoard],
  (filter, columns) => {
    return columns
      ? columns.map(column => {
          if (!column.cards?.length) {
            return column;
          }

          const filteredCards = [...column.cards].filter(card =>
            filter ? card.priority === filter : true
          );

          return { ...column, cards: filteredCards };
        })
      : null;
  }
);
