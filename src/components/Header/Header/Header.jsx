import Burger from '../Burger/Burger';
import Theme from '../Theme/Theme';
import UserInfo from '../UserInfo/UserInfo';
import { HeaderWrap, ThemeInfoWrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrap>
      <Burger />
      <ThemeInfoWrap>
        <Theme />
        <UserInfo />
      </ThemeInfoWrap>
    </HeaderWrap>
  );
};
