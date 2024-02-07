import { useSelector } from 'react-redux';
import { notifySelector } from 'redux/commonSelector';
import { Loader } from '../Loader/Loader';
import { Notification } from '../Notification/Notification';
import { errorNotify } from 'const';

export const NotifyModule = () => {
  const { isLoading, error, succesMsg } = useSelector(notifySelector);

  return (
    <>
      {isLoading && <Loader />}

      {error && error !== errorNotify.user_unauthorized_token && (
        <Notification type="error" message={error} />
      )}

      {succesMsg && <Notification type="success" message={succesMsg} />}
    </>
  );
};
