//---------------Pending and Rejected-------------------
export const handlePendingData = state => {
  state.isLoading = true;
  state.error = null;
};

export const handlePendingDataWLoader = state => {
    state.error = null;
};


export const handleRejectedData = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//------------------------
export const handleLogoutData = (state, action) => {
  state.boards = [];
  state.boardStatus = {
    activeBoard: null,
    isBoardLoaded: false,
  };
  state.columns = null;
};
