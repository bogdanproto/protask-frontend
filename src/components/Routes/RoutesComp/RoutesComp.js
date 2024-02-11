import { Routes, Route } from 'react-router-dom';
import { React } from 'react';
import { Layout } from 'components/Layout/Layout';
import { routes } from 'const';
import { Auth, Home, NotFound, Welcome } from 'pages';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { RedirectedRoute } from '../Redirection/Redirection';
import { PrivateRoute } from '../PrivetRoute/PrivetRoute';
import { Board } from 'pages/Board/Board';

export const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path={routes.ROOT} element={<Layout />}>
          <Route
            path={routes.ROOT}
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

          <Route path={routes.HOME} element={<Home />}>
            <Route
              path={routes.HOME_BORD_NAME}
              element={
                <PrivateRoute
                  redirectTo={routes.WELCOME_ROUTE}
                  component={<Board />}
                />
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
