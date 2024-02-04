import { errorNotify } from 'const';

export const handleError = error =>
  errorNotify[error.code] || errorNotify.common_auth_error;
