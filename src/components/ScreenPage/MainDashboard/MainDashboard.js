import { ColumnsList } from './ColumnsList/ColumnsList';
import { AddColumnCardButton } from 'components/common/AddColumnCardButton/AddColumnCardButton';
import { MainDashboardContainer } from './MainDashboard.styled';
import { useModal } from 'hooks/useModal';

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { ColumnForm } from 'components/ColumnForm/ColumnForm';
// ========================

export const MainDashboard = () => {
  const { isOpen, close, toggle } = useModal();

  return (
    <MainDashboardContainer>
      <ColumnsList />
      <AddColumnCardButton
        type="button"
        title="Add another column"
        onClick={() => toggle()}
      ></AddColumnCardButton>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <ColumnForm closeModal={close} />
      </UniversalModal>
    </MainDashboardContainer>
  );
};
