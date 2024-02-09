import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';

import { ActionContainer, ActionButton } from './ActionPanel.styled';

export const ActionPanel = () => {
  return (
    <ActionContainer>
      <ActionButton>
        <MoveIcon size={16} />
      </ActionButton>
      <ActionButton>
        <PencilIcon size={16} />
      </ActionButton>
      <ActionButton>
        <BasketIcon size={16} />
      </ActionButton>
    </ActionContainer>
  );
};
