import { useModal } from 'hooks/useModal';

import { HomeMessage, MessageText, CreateMessage } from './StartPage.styled';
import { BoardForm } from 'components/BoardForm/BoardForm';

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';

// ========================

export const StartPage = () => {
  const { isOpen, close, toggle } = useModal();

  return (
    <HomeMessage>
      <MessageText>
        Before starting your project, it is essential{' '}
        <CreateMessage onClick={() => toggle()}>
          to create a board
        </CreateMessage>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </MessageText>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm closeModal={close} />
      </UniversalModal>
    </HomeMessage>
  );
};
