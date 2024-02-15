import { errorNotify } from 'const';

export const handleError = error => {
  return errorNotify[error.code] || errorNotify.common_auth_error;
};
