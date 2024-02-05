import { RegisterForm } from 'components/Auth';
import { WelcomeBackGround } from 'components/Welcome';
// import { useParams } from 'react-router';

export const Auth = () => {
  // const { id } = useParams();
  return (
    <WelcomeBackGround>
      <RegisterForm />
    </WelcomeBackGround>
  );
};
