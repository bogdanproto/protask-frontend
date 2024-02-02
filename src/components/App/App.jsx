import { AnyComponent, Header } from 'components/Header';
import { LoginForm, RegisterForm } from 'components/welcomeForm';




// const HomePage = lazy(() => import('pages/welcome/Welcome'));
// const RegisterPage = lazy(() => import('pages/Registeration'));
// const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <>
      <h1>WELCOME TO OUR PROJECT</h1>
      <Header />
      <AnyComponent />
      <welcomeForm/>
    </>
  );
};
