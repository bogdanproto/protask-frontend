import { NotifyModule } from 'components/Notify';
import { RoutesComp } from 'components/Routes/RoutesComp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authSlice/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <NotifyModule />
      <RoutesComp />
    </>
  );
};
