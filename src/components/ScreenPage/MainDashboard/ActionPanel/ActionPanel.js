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

import { ActionButton } from 'components/common/ActionButton/ActionButton.styled';
// import { customStyles } from '../MoveTooltip/MoveTooltip.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'tomato,',
  },
};

// ========================

export const ActionPanel = ({ columnId, cardId, onEditButton }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectAllColumn);
  const availableColumns = useMemo(
    () => getAvailableColumns(columns, columnId),
    [columns, columnId]
  );

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const openTooltip = () => {
    setTooltipOpen(true);
  };

  const closeTooltip = () => {
    setTooltipOpen(false);
  };

  const onDeleteButton = cardId => {
    dispatch(deleteCard(cardId));
  };

  return (
    <ActionContainer>
      {availableColumns.length !== 0 && (
        <ActionButton
          id={cardId}
          onClick={openTooltip}
          // onMouseLeave={closeTooltip}
        >
          <MoveIcon size={16} />
        </ActionButton>
      )}
      <MoveTooltip
        isOpen={isTooltipOpen}
        onRequestClose={closeTooltip}
        style={customStyles}
        parentSelector={() => document.querySelector({ cardId })}
        cardId={cardId}
        targetColumns={availableColumns}
      />

      <ActionButton type="button" onClick={onEditButton}>
        <PencilIcon size={16} />
      </ActionButton>
      <ActionButton type="button" onClick={() => onDeleteButton(cardId)}>
        <BasketIcon size={16} />
      </ActionButton>
    </ActionContainer>
  );
};
