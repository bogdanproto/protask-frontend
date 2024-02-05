import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthUser } from 'redux/authSlice/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuthUser);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
