import { AnyComponent, Header } from 'components/Header';
import { Welcome } from 'pages';





// const HomePage = lazy(() => import('pages/welcome/Welcome'));
// const RegisterPage = lazy(() => import('pages/Registeration'));
// const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <>
      <h1>WELCOME TO OUR PROJECT</h1>
      <Header />
      <AnyComponent />
      <Welcome/>
    </>
  );
};
