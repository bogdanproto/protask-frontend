import { text } from 'data';
import { LogoSvg } from '..';
import { LogoWithTextBox } from './LogoWithText.styled';

export const LogoWithText = () => {
  return (
    <LogoWithTextBox>
      <LogoSvg />
      <h1>{text.brand}</h1>
    </LogoWithTextBox>
  );
};
