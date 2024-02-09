import { PlusIcon } from '../../../common/IconsLibrary/index';
import { AddColumnBtnContainer } from './AddColumnBtn.styled';

export const AddColumnBtn = () => {
  return (
    <AddColumnBtnContainer type="button">
      <PlusIcon size={28} fill={'white'} />
      <p>Add another column</p>
    </AddColumnBtnContainer>
  );
};
