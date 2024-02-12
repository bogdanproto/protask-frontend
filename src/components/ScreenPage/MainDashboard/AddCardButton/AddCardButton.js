import { PlusIcon } from 'components/common/IconsLibrary/index';
import {
  AddButtonContainer,
  IconWrapper,
  ButtonTitle,
} from './AddCardButton.styled';

export const AddCardButton = ({ onClick }) => {
  return (
    <AddButtonContainer type="button" onClick={onClick}>
      <IconWrapper>
        <PlusIcon size={28} fill={'white'} />
      </IconWrapper>
      <ButtonTitle>Add another card</ButtonTitle>
    </AddButtonContainer>
  );
};
