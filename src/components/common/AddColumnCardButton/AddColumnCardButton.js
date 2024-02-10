import { PlusIcon } from '../IconsLibrary/index';
import {
  AddButtonContainer,
  IconWrapper,
  ButtonTitle,
} from './AddColumnCardButton.styled';

export const AddColumnCardButton = ({ title }) => {
  return (
    <AddButtonContainer type="button">
      <IconWrapper>
        <PlusIcon size={28} fill={'white'} />
      </IconWrapper>
      <ButtonTitle>{title}</ButtonTitle>
    </AddButtonContainer>
  );
};
