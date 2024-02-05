import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthUser } from 'redux/authSlice/selectors';

export const RedirectedRoute = ({ redirectTo1 = '/', redirectTo2 = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuthUser);
  return isLoggedIn ? (
    <Navigate to={redirectTo1} />
  ) : (
    <Navigate to={redirectTo2} />
  );
};
