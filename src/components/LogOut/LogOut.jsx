import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/userAuth/operations';
import { selectUser } from 'redux/userAuth/selectors';
import { LogoutBox, LogoutIconStyled } from './LogOut.styled';

export const LogOut = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return (
    <LogoutBox>
      <p>Hi, {name?.split(' ')[0]}</p>
      <LogoutIconStyled onClick={handleClick} />
    </LogoutBox>
  );
};
