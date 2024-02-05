import { LogoSvgStyled } from './LogoSvg.styled';

export const LogoSvg = () => {
  return (
    <svg fill="red" width="64">
      <use href={`sprite.svg#icon-logo`} />
    </svg>
  );
};
