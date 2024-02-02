//---------------Pending and Rejected-------------------
export const handlePendingData = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejectedData = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
