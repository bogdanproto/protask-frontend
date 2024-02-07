import { BsPlusSquareFill } from 'react-icons/bs';
import { AddColumnBtnContainer } from './AddColumnBtn.styled';

export const AddColumnBtn = ({ text }) => {
  return (
    <AddColumnBtnContainer type="button">
      <BsPlusSquareFill size={28} />
      <p>Add another column</p>
    </AddColumnBtnContainer>
  );
};
