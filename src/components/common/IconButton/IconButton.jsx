import { IconButtonStyled } from './IconButton.styled';

export const IconButton = ({ children, ...props }) => {
  return (
    <>
      <IconButtonStyled {...props}>{children}</IconButtonStyled>
    </>
  );
};
