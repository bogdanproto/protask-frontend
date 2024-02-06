import {
  AuthSwitch,
  LoginForm,
  PopUpAuthStyled,
  RegisterForm,
} from 'components/Auth';
import { WelcomeBackGround } from 'components/Welcome';
import { useParams } from 'react-router';

export const Auth = () => {
  const { id } = useParams();
  return (
    <WelcomeBackGround>
      <PopUpAuthStyled>
        <AuthSwitch id={id} />
        {id === 'register' ? <RegisterForm /> : <LoginForm />}
      </PopUpAuthStyled>
    </WelcomeBackGround>
  );
};
