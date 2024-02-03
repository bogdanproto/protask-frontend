import { Routes, Route } from 'react-router-dom';
import { React } from 'react';
import { Layout } from 'components/Layout/Layout';
import { routes } from 'const';
import { Auth, Home, NotFound, Welcome } from 'pages';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { RedirectedRoute } from './Redirection/Redirection';
import { PrivateRoute } from './PrivetRoute/PrivetRoute';
import { Board } from 'pages/Board/Board';

export const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <RedirectedRoute
                redirectTo1={routes.HOME}
                redirectTo2={routes.WELCOME_ROUTE}
              />
            }
          />
          <Route
            path={routes.WELCOME_ROUTE}
            element={
              <RestrictedRoute
                redirectTo={routes.HOME}
                component={<Welcome />}
              />
            }
          />
          <Route path={routes.WELCOME_ROUTE} element={<Welcome />}>
            <Route path={routes.AUTH_ID} element={<Auth />} />
          </Route>
          <Route
            path={routes.AUTH}
            element={
              <RedirectedRoute
                redirectTo1={routes.HOME}
                redirectTo2={routes.WELCOME_ROUTE}
              />
            }
          />

          <Route path={routes.AUTH_ID} element={<Auth />} />
          <Route
            path={routes.AUTH_ID}
            element={
              <RestrictedRoute redirectTo={routes.HOME} component={<Auth />} />
            }
          />
          <Route
            path={routes.HOME}
            element={
              <PrivateRoute
                redirectTo={routes.WELCOME_ROUTE}
                component={<Home />}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
