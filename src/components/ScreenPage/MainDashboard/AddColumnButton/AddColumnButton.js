import { PlusIcon } from 'components/common/IconsLibrary/index';
import {
  AddButtonContainer,
  IconWrapper,
  ButtonTitle,
} from './AddColumnButton.styled';

export const AddColumnButton = ({ onClick }) => {
  return (
    <div>
      <AddButtonContainer type="button" onClick={onClick}>
        <IconWrapper>
          <PlusIcon size={28} />
        </IconWrapper>
        <ButtonTitle>Add another column</ButtonTitle>
      </AddButtonContainer>
    </div>
  );
};
