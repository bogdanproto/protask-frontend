import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectError } from 'redux/contacts/selectors';
import { selectStatusAuth } from 'redux/userAuth/selectors';
import { errorsAuthCode } from 'utils/consts';

export const Error = () => {
  const { errorAuth } = useSelector(selectStatusAuth);
  const error = useSelector(selectError);

  useEffect(() => {
    if (errorAuth?.status === errorsAuthCode.BADTOKEN) {
      return;
    }
    toast.error(errorAuth?.message);

    if (error) {
      toast.error('Something went wrong, please try again');
    }
  }, [error, errorAuth]);

  return null;
};
