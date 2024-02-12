import { useDispatch, useSelector } from 'react-redux';

import { deleteCard } from 'redux/dataSlice/operations';

import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';
import { ActionContainer } from './ActionPanel.styled';
import { MoveTooltip } from '../MoveTooltip/MoveTooltip';
import {
  EditButton,
  MoveButton,
} from 'components/common/EditButton/EditButton.styled';

import { selectAllColumn } from 'redux/dataSlice/selectors';
import { useMemo, useState } from 'react';
import { getAvailableColumns } from 'helpers';

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
          {isTooltipOpen && (
            <MoveTooltip cardId={cardId} targetColumns={availableColumns} />
          )}
        </MoveButton>
      )}

      <EditButton type="button" onClick={onEditButton}>
        <PencilIcon size={16} />
      </EditButton>
      <EditButton type="button" onClick={() => onDeleteButton(cardId)}>
        <BasketIcon size={16} />
      </EditButton>
    </ActionContainer>
  );
};
