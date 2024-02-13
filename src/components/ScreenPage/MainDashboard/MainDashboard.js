import { useSelector } from 'react-redux/';

import { useModal } from 'hooks/useModal';
import {
  selectAllColumn,
  selectFilteredCardsOfBoard,
} from 'redux/dataSlice/selectors';

import { ColumnsList } from './ColumnsList/ColumnsList';
import { AddColumnButton } from './AddColumnButton/AddColumnButton';
import { ColumnForm } from 'components/ColumnForm/ColumnForm';
import { MainDashboardContainer } from './MainDashboard.styled';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';

// ========================

export const MainDashboard = ({ boardId }) => {
  const { isOpen, close, toggle } = useModal();
  // const columns = useSelector(selectFilteredCardsOfBoard);
  const columns = useSelector(selectAllColumn);

  return (
    <MainDashboardContainer>
      {/* {columns && <ColumnsList columns={columns} />} */}

      <ColumnsList columns={columns} />

      <AddColumnButton
        type="button"
        title="Add another column"
        onClick={() => toggle()}
      ></AddColumnButton>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <ColumnForm closeModal={close} boardId={boardId} />
      </UniversalModal>
    </MainDashboardContainer>
  );
};
