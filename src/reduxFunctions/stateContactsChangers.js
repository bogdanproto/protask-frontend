export const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

export const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items].filter(item => {
    return item.id !== action.payload.id;
  });
};

export const handleError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
