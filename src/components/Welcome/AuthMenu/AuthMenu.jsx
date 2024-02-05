import { BtnLink } from '../BtnLink/BtnLink';
import { AuthMenuStyled } from './AuthMenu.styled';
import { LinkStyled } from './Link.Styled';

export const AuthMenu = () => {
  return (
    <AuthMenuStyled>
      <BtnLink to={`/auth/register`}>Registration</BtnLink>
      <LinkStyled to={`/auth/login`}>Log In</LinkStyled>
    </AuthMenuStyled>
  );
};
