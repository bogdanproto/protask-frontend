import { PlusIcon } from '../../../common/IconsLibrary/index';
import { AddColumnBtnContainer, IconWrapper } from './AddColumnBtn.styled';

export const AddColumnBtn = () => {
  return (
    <AddColumnBtnContainer type="button">
      <IconWrapper>
        <PlusIcon size={28} fill={'white'} />
      </IconWrapper>
      <p>Add another column</p>
    </AddColumnBtnContainer>
  );
};
