//--------------get wallpapers----------------
export const handleFulfilledGetAllWallpapers = (state, action) => {
  state.wallpapers = action.payload.reverse();

  state.isLoading = false;
  state.error = null;
};

//---------------Pending and Rejected-------------------
export const handlePendingUiData = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejectedUiData = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
