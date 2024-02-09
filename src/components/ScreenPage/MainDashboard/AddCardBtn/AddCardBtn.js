import { PlusIcon } from '../../../common/IconsLibrary/index';
import { AddCardBtnContainer, IconWrapper } from './AddCardBtn.styled';

export const AddCardBtn = () => {
  return (
    <AddCardBtnContainer type="button">
      <IconWrapper>
        <PlusIcon size={28} fill={'white'} />
      </IconWrapper>
      <p>Add another card</p>
    </AddCardBtnContainer>
  );
};
