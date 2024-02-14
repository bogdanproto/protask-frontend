import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCard } from 'redux/dataSlice/operations';
import { selectAllColumn } from 'redux/dataSlice/selectors';

import { getAvailableColumns } from 'helpers';

import { PencilIcon, BasketIcon } from 'components/common/IconsLibrary';
import { ActionContainer } from './ActionPanel.styled';

import { ActionButton } from 'components/common/ActionButton/ActionButton.styled';
import { MoveTooltip } from '../MoveTooltip/MoveTooltip';
import Tooltip from '@mui/material/Tooltip';

// ========================

export const ActionPanel = ({ columnId, cardId, onEditButton }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectAllColumn);
  const availableColumns = useMemo(
    () => getAvailableColumns(columns, columnId),
    [columns, columnId]
  );
  const onDeleteButton = cardId => {
    dispatch(deleteCard(cardId));
  };

  return (
    <ActionContainer>
      {availableColumns.length !== 0 && (
        <MoveTooltip cardId={cardId} columns={availableColumns} />
      )}

      <Tooltip title="Edit" placement="top">
        <ActionButton type="button" onClick={onEditButton}>
          <PencilIcon size={16} />
        </ActionButton>
      </Tooltip>
      <Tooltip title="Delete" placement="top">
        <ActionButton type="button" onClick={() => onDeleteButton(cardId)}>
          <BasketIcon size={16} />
        </ActionButton>
      </Tooltip>
    </ActionContainer>
  );
};
