import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectStatusAuth } from 'redux/userAuth/selectors';
import { routes } from 'utils/consts';

export const PrivateRoute = ({ component, redirectTo = routes.HOME }) => {
  const { token, errorAuth } = useSelector(selectStatusAuth);
  const isNotSuccessAuth = !token || (token && errorAuth.status);

  return isNotSuccessAuth ? <Navigate to={redirectTo} /> : component;
};
