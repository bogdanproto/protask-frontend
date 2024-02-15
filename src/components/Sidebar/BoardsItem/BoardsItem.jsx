import {
  BoardContainer,
  Left,
  IconWrapper,
  BoardTitle,
  BtnContainer,
} from './BoardsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteBoard } from 'redux/dataSlice/operations/board/deleteBoard';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';
import { getBoardIcon } from 'helpers/index';
import { BasketIcon, PencilIcon } from 'components/common/IconsLibrary/index';
import { BoardForm } from 'components/BoardForm/BoardForm';
import { ActionButton } from 'components/common/ActionButton/ActionButton.styled';
import { useNavigate } from 'react-router';
import { routes } from 'const';

export const BoardsItem = ({ board, active }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, close, toggle } = useModal();

  const handleDelete = evt => {
    dispatch(deleteBoard(evt.target?.closest('button').dataset.id));
    navigate(routes.HOME);
  };

  return (
    <BoardContainer>
      <Left>
        <IconWrapper>{getBoardIcon(board.icon)}</IconWrapper>
        <BoardTitle>{board.title}</BoardTitle>
      </Left>

      {active === true && (
        <BtnContainer>
          <ActionButton type="button" data-id={board._id} onClick={toggle}>
            <PencilIcon size={16} />
          </ActionButton>
          <ActionButton
            type="button"
            data-id={board._id}
            onClick={handleDelete}
          >
            <BasketIcon size={16} />
          </ActionButton>
        </BtnContainer>
      )}
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm
          closeModal={close}
          boardId={board._id}
          title={board.title}
          icon={board.icon}
          backgroundImg={board.backgroundImg}
        />
      </UniversalModal>
    </BoardContainer>
  );
};
