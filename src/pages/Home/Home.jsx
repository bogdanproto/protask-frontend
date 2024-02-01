import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectStatusAuth } from 'redux/userAuth/selectors';
import { routes } from 'utils/consts';

const Home = () => {
  const { isLoggedIn, token, errorAuth } = useSelector(selectStatusAuth);

  const isNotSuccessAuth = !token || (token && errorAuth.status);

  return (
    <>
      {isNotSuccessAuth && <Navigate to={routes.LOGIN} />}
      {isLoggedIn && <Navigate to={routes.PHONEBOOK} />}
    </>
  );
};

export default Home;
