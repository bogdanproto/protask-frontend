import { LogoSvgStyled } from './LogoSvg.styled';

export const LogoSvg = () => {
  return (
    <LogoSvgStyled>
      <use href={`sprite.svg#icon-logo`} />
    </LogoSvgStyled>
  );
};
