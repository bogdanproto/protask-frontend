import { errorNotify } from 'const';

export const handleError = error => {
  console.log(error.code);
  return errorNotify[error.code] || errorNotify.common_auth_error;
};
