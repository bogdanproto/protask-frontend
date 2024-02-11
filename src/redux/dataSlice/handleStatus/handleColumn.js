import { successNotify } from 'const';

export const handleFulfilledGetAllColumns = (state, action) => {
  state.columns = action.payload;

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGetColumnById = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledAddColumn = (state, action) => {
  action.payload.cards = [];
  state.columns = [...state.columns, action.payload];

  state.successMsg = successNotify.COLUMN_ADD;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledUpdateColumn = (state, action) => {
  const newColumn = action.payload;
  state.columns = [...state.columns].map(item =>
    item._id === newColumn._id ? { ...item, title: newColumn.title } : item
  );

  state.successMsg = successNotify.COLUMN_UPDATE;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledDeleteColumn = (state, action) => {
  const { _id } = action.payload;
  state.columns = [...state.columns].filter(item => item._id !== _id);

  state.successMsg = successNotify.COLUMN_DELETE;
  state.isLoading = false;
  state.error = null;
};
