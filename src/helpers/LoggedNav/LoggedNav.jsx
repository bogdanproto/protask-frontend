import { LoggedItem, LoggedLink, LoggedList } from './Logged.styled';

const LoggedNav = () => {
  return (
    <LoggedList>
      <LoggedItem>
        <LoggedLink to="login">LogIn</LoggedLink>
      </LoggedItem>
      <LoggedItem>
        <LoggedLink to="register">Registeration</LoggedLink>
      </LoggedItem>
    </LoggedList>
  );
};

export default LoggedNav;