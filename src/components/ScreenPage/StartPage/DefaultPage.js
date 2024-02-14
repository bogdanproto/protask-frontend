import { useModal } from 'hooks/useModal';

import { HomeMessage, MessageText, CreateMessage } from './StartPage.styled';
import { BoardForm } from 'components/BoardForm/BoardForm';

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';

// ========================

export const DefaultPage = () => {
  const { isOpen, close, toggle } = useModal();

  return (
    <HomeMessage>
      <MessageText>
        Please select your board{' '}
        <CreateMessage onClick={() => toggle()}>
          or create a new one.
        </CreateMessage>{' '}
      </MessageText>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm closeModal={close} />
      </UniversalModal>
    </HomeMessage>
  );
};
