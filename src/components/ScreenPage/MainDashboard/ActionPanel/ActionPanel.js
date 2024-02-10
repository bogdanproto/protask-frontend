import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';

import { ActionContainer } from './ActionPanel.styled';
import { EditButtonWrapper } from 'components/common/EditButtonWrapper/EditButtonWrapper';

export const ActionPanel = () => {
  return (
    <ActionContainer>
      <EditButtonWrapper>
        <MoveIcon size={16} />
      </EditButtonWrapper>
      <EditButtonWrapper>
        <PencilIcon size={16} />
      </EditButtonWrapper>
      <EditButtonWrapper>
        <BasketIcon size={16} />
      </EditButtonWrapper>
    </ActionContainer>
  );
};
