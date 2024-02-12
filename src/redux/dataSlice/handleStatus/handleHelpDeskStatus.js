import { successNotify } from 'const';

export const handleFulfilledHelpDesk = (state, action) => {
  state.successMsg = action.payload;
  state.isLoading = false;
  state.error = null;

  state.successMsg = successNotify.HELP;
};
