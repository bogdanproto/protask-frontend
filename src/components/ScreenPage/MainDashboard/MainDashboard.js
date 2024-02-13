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
// import { useState } from 'react';

// ========================

// const DATA = [
//   { _id: '65cbb48837f96cc4e506b580', title: 'To Do' },
//   { _id: '65cbb49337f96cc4e506b589', title: 'In Progress' },
//   { _id: '65cbb49a37f96cc4e506b593', title: 'Done' },
// ];

export const MainDashboard = ({ boardId }) => {
  // const [columns, setColumns] = useState(DATA);

  const { isOpen, close, toggle } = useModal();
  const columns = useSelector(selectFilteredCardsOfBoard);
  // const columns = useSelector(selectAllColumn);
  console.log(columns);
  return (
    <MainDashboardContainer>
      {columns && <ColumnsList columns={columns} />}

      {/* <ColumnsList columns={columns} /> */}

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
