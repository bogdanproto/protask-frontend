import sprite from 'data/svg/sprite.svg';
import { LogoIcon } from './Logo.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const Logo = () => {
  let logo;

  const LogoBlack = (
    <svg width="104" height="32">
      <use href={sprite + '#logo-black'} />
    </svg>
  );

  const LogoWhite = (
    <svg width="104" height="32">
      <use href={sprite + '#logo-white'} />
    </svg>
  );

  const LogoViolet = (
    <svg width="104" height="32">
      <use href={sprite + '#logo-violet'} />
    </svg>
  );

  const themeContext = useContext(ThemeContext);
  if (themeContext.logoPath === '#logo-white') {
    logo = LogoWhite;
  } else if (themeContext.logoPath === '#logo-black') {
    logo = LogoBlack;
  } else {
    logo = LogoViolet;
  }

  return <LogoIcon href="/">{logo}</LogoIcon>;
};
