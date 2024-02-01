import { errorsAuthCode } from './consts';

export const prepareErrorObj = (status = null, data = null) => {
  if (status === errorsAuthCode.BADSERVER) {
    return {
      status,
      message: 'Server error, please reload the page and try again',
    };
  }

  if (!data && status === errorsAuthCode.BADTOKEN) {
    return {
      status,
      message: 'Bad token, please reLogin',
    };
  }

  if (!data && status === errorsAuthCode.BADLOGIN) {
    return {
      status,
      message: 'Login or Password is incorrect, please try another',
    };
  }

  if (status === errorsAuthCode.BADLOGIN && data.hasOwnProperty('keyValue')) {
    const email = data.keyValue.email;
    return {
      status,
      message: `Login ${email} is existed, use another email`,
    };
  }

  if (status === errorsAuthCode.BADLOGIN && data.hasOwnProperty('errors')) {
    const message = data.message;
    return {
      status,
      message: message,
    };
  }
};
