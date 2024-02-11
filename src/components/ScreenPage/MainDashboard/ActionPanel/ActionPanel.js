import { useDispatch, useSelector } from 'react-redux';

import { deleteCard } from 'redux/dataSlice/operations';

import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';
import { ActionContainer, Tooltip } from './ActionPanel.styled';
import { EditButton } from 'components/common/EditButton/EditButton.styled';

import { selectAllCardsOfBoard } from 'redux/dataSlice/selectors';
import { useState } from 'react';

// ========================

export const ActionPanel = ({ columnId, cardId, onEditButton }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectAllCardsOfBoard);
  // console.log(columns);

  const availableColumns = columns
    .map(({ _id, title }) => ({
      _id,
      title,
    }))
    .filter(({ _id }) => _id !== columnId)
    .sort((prevColumn, nextColumn) =>
      prevColumn.title.localeCompare(nextColumn.title)
    );

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  // console.log(availableColumns);

  const toggleTooltipOpen = () => {
    setTooltipOpen(!isTooltipOpen);
  };

  // const onChangeColumnButton = () => {
  //   dispatch(changeCardsColumn());
  // };

  const onDeleteButton = cardId => {
    dispatch(deleteCard(cardId));
  };
  return (
    <ActionContainer>
      {availableColumns.length !== 0 && (
        <EditButton
          style={{ position: 'relative' }}
          type="button"
          onClick={toggleTooltipOpen}
        >
          <MoveIcon size={16} />
          {isTooltipOpen && <Tooltip className="opened" />}
        </EditButton>
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
