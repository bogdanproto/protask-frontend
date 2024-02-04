import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <>
      <h1>Task Pro</h1>

      <p>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</p>
      
      <Link to={`/auth/register`}>Registration </Link>
      <Link to={`/auth/login`}> Log In </Link>
      
    </>
  );
};

