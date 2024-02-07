import { BsPlusSquareFill } from 'react-icons/bs';
import { AddCardBtnContainer } from './AddCardBtn.styled';

export const AddCardBtn = () => {
  return (
    <AddCardBtnContainer type="button">
      <BsPlusSquareFill size={28} />
      <p>Add another card</p>
    </AddCardBtnContainer>
  );
};
