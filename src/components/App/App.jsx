import { Header } from 'components/Header';
import { RoutesComp } from 'components/Routes/RoutesComp';
// import  { LoginForm }  from 'components/welcomeForm/LoginForm/LoginForm.jsx';
// import  { RegisterForm } from 'components/welcomeForm/RegisterForm/RegisterForm.jsx';

export const App = () => {
  return (
    <>
      <div className="container">
        <h1>WELCOME TO OUR PROJECT</h1>
        <RoutesComp />
        {/* <Header />
        <AnyComponent /> */}
      </div>
    </>
  );
};
