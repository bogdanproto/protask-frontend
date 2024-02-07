import { BsPlusSquareFill } from 'react-icons/bs';
import { AddColumnBtnContainer } from './AddColumnBtn.styled';

export const AddColumnBtn = () => {
  return (
    <AddColumnBtnContainer type="button">
      <BsPlusSquareFill size={28} />
      Add another column
    </AddColumnBtnContainer>
  );
};
