import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthUser } from 'redux/authSlice/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isLoading } = useSelector(selectAuthUser);
  const redirect = !isLoggedIn && !isLoading;
  return redirect ? <Navigate to={redirectTo} /> : Component;
};
