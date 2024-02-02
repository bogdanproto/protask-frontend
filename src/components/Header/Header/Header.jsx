import Burger from '../Burger/Burger';
import Theme from '../Theme/Theme';
import UserInfo from '../UserInfo/UserInfo';
import { HeaderWrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrap>
      <Burger />
      <>
        <Theme />
        <UserInfo />
      </>
    </HeaderWrap>
  );
};
