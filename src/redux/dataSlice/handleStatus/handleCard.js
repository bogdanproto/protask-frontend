import { successNotify } from 'const';

export const handleFulfilledAddCard = (state, action) => {
  const newCard = action.payload;

  state.columns = [...state.columns].map(item => {
    if (item._id === newCard.column) {
      item.cards = [newCard, ...item.cards];
      return item;
    }
    return item;
  });

  state.successMsg = successNotify.CARD_ADD;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledChangeCardsColumn = (state, action) => {
  const cardNewColumn = action.payload;

  state.columns = [...state.columns].map(item => {
    if (item._id === cardNewColumn.column) {
      item.cards = [cardNewColumn, ...item.cards];
      return item;
    }
    if (item._id === cardNewColumn.prevColumn) {
      item.cards = [...item.cards].filter(
        card => card._id !== cardNewColumn._id
      );
      return item;
    }

    return item;
  });

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilleDeleteCard = (state, action) => {
  const deletedCard = action.payload;

  state.columns = [...state.columns].map(item => {
    if (item._id === deletedCard.column) {
      item.cards = [...item.cards].filter(card => card._id !== deletedCard._id);
      return item;
    }

    return item;
  });

  state.successMsg = successNotify.CARD_DELETE;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilleUpdateCard = (state, action) => {
  const updatedCard = action.payload;

  state.columns = [...state.columns].map(item => {
    if (item._id === updatedCard.column) {
      item.cards = [...item.cards].map(card =>
        card._id === updatedCard._id ? updatedCard : card
      );
      return item;
    }

    return item;
  });

  state.successMsg = successNotify.CARD_UPDATE;
  state.isLoading = false;
  state.error = null;
};
