import { GoPlus } from 'react-icons/go';
import { AddButtonStyled, IconBox } from './AddButton.styled';

export const AddButton = ({ children, ...props }) => {
  return (
    <AddButtonStyled {...props}>
      <IconBox>
        <GoPlus />
      </IconBox>
      {children}
    </AddButtonStyled>
  );
};
