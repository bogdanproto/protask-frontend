import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectStatusAuth } from 'redux/userAuth/selectors';

export const ResrictedRoute = ({ component, redirectTo }) => {
  const { isLoggedIn } = useSelector(selectStatusAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
