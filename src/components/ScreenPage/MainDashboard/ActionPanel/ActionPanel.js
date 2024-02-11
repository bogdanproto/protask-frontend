import { useDispatch } from 'react-redux';

import { deleteCard } from 'redux/dataSlice/operations';

import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';
import { ActionContainer } from './ActionPanel.styled';
import { EditButtonWrapper } from 'components/common/EditButtonWrapper/EditButtonWrapper';

// ========================

export const ActionPanel = ({ cardId, onEditButton }) => {
  const dispatch = useDispatch();

  const onDeleteButton = cardId => {
    dispatch(deleteCard(cardId));
  };
  return (
    <ActionContainer>
      <EditButtonWrapper type="button">
        <MoveIcon size={16} />
      </EditButtonWrapper>
      <EditButtonWrapper type="button" onClick={onEditButton}>
        <PencilIcon size={16} />
      </EditButtonWrapper>
      <EditButtonWrapper type="button" onClick={() => onDeleteButton(cardId)}>
        <BasketIcon size={16} />
      </EditButtonWrapper>
    </ActionContainer>
  );
};
