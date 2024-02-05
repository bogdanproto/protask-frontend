import {Burger, HeaderThemeSelect} from 'components/Header/index.js';
import UserInfo from '../UserInfo/UserInfo';
import { HeaderWrap, ThemeInfoWrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrap>
        <Burger />
        <ThemeInfoWrap>
          <HeaderThemeSelect />
          <UserInfo />
        </ThemeInfoWrap>
    </HeaderWrap>
  );
};
