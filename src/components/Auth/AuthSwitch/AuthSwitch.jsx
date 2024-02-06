import { routes } from 'const';
import { AuthSwitchStyled } from './AuthSwitch.styled';
import { LinkSwitchStyled } from './LinkSwitch.styled';

export const AuthSwitch = ({ id }) => {
  return (
    <AuthSwitchStyled>
      <LinkSwitchStyled $isActive={id === 'register'} to={routes.AUTH_REGISTER}>
        Registration
      </LinkSwitchStyled>
      <LinkSwitchStyled $isActive={id === 'login'} to={routes.AUTH_LOGIN}>
        Log In
      </LinkSwitchStyled>
    </AuthSwitchStyled>
  );
};
