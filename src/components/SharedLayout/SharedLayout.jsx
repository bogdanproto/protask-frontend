import { Outlet } from 'react-router-dom';
import { Container, SpaceApp } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoader } from 'redux/contacts/selectors';
import { selectStatusAuth } from 'redux/userAuth/selectors';
import { ToastContainer } from 'react-toastify';
import { Error } from 'components/Error/Error';

export const SharedLayout = () => {
  const isLoading = useSelector(selectLoader);
  const { isRefreshing } = useSelector(selectStatusAuth);
  return (
    <Container>
      <SpaceApp>
        {(isLoading || isRefreshing) && <Loader />}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>

        <Error />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </SpaceApp>
    </Container>
  );
};
