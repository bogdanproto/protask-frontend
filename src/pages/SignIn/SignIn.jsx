import { SigninForm } from 'components/SigninForm/SigninForm';
import { SignInHaveAccountBox, SignInStyled } from './SignIn.styled';
import { NavLinkStyled } from 'pages/Login/Login.styled';
import { routes } from 'utils/consts';

const SignIn = () => {
  return (
    <SignInStyled>
      <h1>PHONEBOOK</h1>
      <SigninForm />
      <SignInHaveAccountBox>
        <p>Already have an account</p>
        <NavLinkStyled to={routes.LOGIN}>Login</NavLinkStyled>
      </SignInHaveAccountBox>
    </SignInStyled>
  );
};

export default SignIn;
