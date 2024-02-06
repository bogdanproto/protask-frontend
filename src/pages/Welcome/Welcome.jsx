import {
  AuthMenu,
  ImgWelcome,
  WelcomeBackGround,
  WelcomeTitle,
} from 'components/Welcome';
import { LogoWithText } from 'components/common';

export const Welcome = () => {
  return (
    <WelcomeBackGround>
      <ImgWelcome />
      <LogoWithText />
      <WelcomeTitle />
      <AuthMenu />
    </WelcomeBackGround>
  );
};
