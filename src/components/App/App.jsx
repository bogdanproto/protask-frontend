import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from 'pages/Home/Home';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { PrivateRoute } from 'pages/PrivateRoute';
import { ResrictedRoute } from 'pages/RestrictedRoute';
import { refreshUser } from 'redux/userAuth/operations';
import { routes } from 'utils/consts';

const PhonebookPage = lazy(() => import('../../pages/PhoneBook/PhoneBook'));
const LogInPage = lazy(() => import('../../pages/Login/LogIn'));
const SigInPage = lazy(() => import('../../pages/SignIn/SignIn'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path={routes.LOGIN}
          element={
            <ResrictedRoute
              redirectTo={routes.PHONEBOOK}
              component={<LogInPage />}
            />
          }
        />
        <Route
          path={routes.SIGIN}
          element={
            <ResrictedRoute
              redirectTo={routes.PHONEBOOK}
              component={<SigInPage />}
            />
          }
        />
        <Route
          path={routes.PHONEBOOK}
          element={
            <PrivateRoute
              redirectTo={routes.LOGIN}
              component={<PhonebookPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
