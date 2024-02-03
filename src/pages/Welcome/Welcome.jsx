import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <>
      <h3>Welcom</h3>
      <Link to={`/auth/login`}> login </Link>
      <Link to={`/auth/register`}>register </Link>
    </>
  );
};
