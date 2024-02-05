import { text } from 'data';
import { WelcomeTitleStyled } from './WelcomeTitle.styled';

export const WelcomeTitle = () => {
  return <WelcomeTitleStyled>{text.titleWelcome}</WelcomeTitleStyled>;
};
