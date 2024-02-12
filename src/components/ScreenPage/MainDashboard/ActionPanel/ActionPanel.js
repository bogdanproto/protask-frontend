import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCard } from 'redux/dataSlice/operations';
import { selectAllColumn } from 'redux/dataSlice/selectors';

import { getAvailableColumns } from 'helpers';
import { MoveTooltip } from '../MoveTooltip/MoveTooltip';
import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';
import { ActionContainer } from './ActionPanel.styled';

import {
  ActionButton,
  MoveButton,
} from 'components/common/ActionButton/ActionButton.styled';

// ========================

export const ActionPanel = ({ columnId, cardId, onEditButton }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectAllColumn);
  const availableColumns = useMemo(
    () => getAvailableColumns(columns, columnId),
    [columns, columnId]
  );

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const onDeleteButton = cardId => {
    dispatch(deleteCard(cardId));
  };

  return (
    <ActionContainer>
      {availableColumns.length !== 0 && (
        <MoveButton
          onClick={() => setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
        >
          <MoveIcon size={16} />
        </MoveButton>
      )}
      {isTooltipOpen && (
        <MoveTooltip cardId={cardId} targetColumns={availableColumns} />
      )}

      <ActionButton type="button" onClick={onEditButton}>
        <PencilIcon size={16} />
      </ActionButton>
      <ActionButton type="button" onClick={() => onDeleteButton(cardId)}>
        <BasketIcon size={16} />
      </ActionButton>
    </ActionContainer>
  );
};
