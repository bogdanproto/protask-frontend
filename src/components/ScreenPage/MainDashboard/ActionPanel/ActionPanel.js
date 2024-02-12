import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCard } from 'redux/dataSlice/operations';
import { selectAllColumn } from 'redux/dataSlice/selectors';

import { getAvailableColumns } from 'helpers';

import {
  MoveIcon,
  PencilIcon,
  BasketIcon,
} from 'components/common/IconsLibrary';
import { ActionContainer } from './ActionPanel.styled';

import { ActionButton } from 'components/common/ActionButton/ActionButton.styled';
// import { MoveTooltip } from '../MoveTooltip/MoveTooltip';

// ========================

export const ActionPanel = ({ columnId, cardId, onEditButton }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectAllColumn);
  const availableColumns = useMemo(
    () => getAvailableColumns(columns, columnId),
    [columns, columnId]
  );

  // const [isTooltipOpen, setTooltipOpen] = useState(false);

  const onDeleteButton = cardId => {
    dispatch(deleteCard(cardId));
  };

  return (
    <ActionContainer>
      {availableColumns.length !== 0 && (
        <ActionButton type="button">
          <MoveIcon size={16} />
        </ActionButton>
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
