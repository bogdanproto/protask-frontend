import { BtnLinkStyled } from './BtnLink.styled';

export const BtnLink = ({ children, ...props }) => {
  return <BtnLinkStyled {...props}>{children}</BtnLinkStyled>;
};
