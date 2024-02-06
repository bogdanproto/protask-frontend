import { routes } from 'const';
import { BtnLink } from '../BtnLink/BtnLink';
import { AuthMenuStyled } from './AuthMenu.styled';
import { LinkStyled } from './Link.Styled';

export const AuthMenu = () => {
  return (
    <AuthMenuStyled>
      <BtnLink to={routes.AUTH_REGISTER}>Registration</BtnLink>
      <LinkStyled to={routes.AUTH_LOGIN}>Log In</LinkStyled>
    </AuthMenuStyled>
  );
};
