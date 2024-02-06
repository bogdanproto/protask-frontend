import { Header } from 'components/Header';
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
<<<<<<< HEAD
      <div className="container">
        <h1>WELCOME TO OUR PROJECT</h1>
        <RoutesComp />
        {/* <Header /> */}
        {/* <Header />
        <AnyComponent /> */}
      </div>
=======
      <RoutesComp />
>>>>>>> f858055387599acb0eefed2edcb7b76301b54301
    </>
  );
};
