import { BtnContainer } from './BoardsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteBoard } from 'redux/dataSlice/operations/board/deleteBoard';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { BoardForm } from 'components/BoardForm/BoardForm';
import { useModal } from 'hooks/useModal';
import { getBoardIcon } from 'helpers/index';
import { EditButton } from 'components/common/EditButton/EditButton.styled';
import { BasketIcon, PencilIcon } from 'components/common/IconsLibrary/index';

export const BoardsItem = ({ board, active }) => {
  const dispatch = useDispatch();

  const { isOpen, close, toggle } = useModal();

  const handleDelete = evt => {
    dispatch(deleteBoard(evt.target?.closest('button').dataset.id));
  };

  return (
    <>
      {getBoardIcon(board.icon)}
      <h3>{board.title}</h3>
      {active === true && (
        <BtnContainer>
          <EditButton type="button" data-id={board._id} onClick={toggle}>
            <PencilIcon size={16} />
          </EditButton>
          <EditButton type="button" data-id={board._id} onClick={handleDelete}>
            <BasketIcon size={16} />
          </EditButton>
        </BtnContainer>
      )}
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm closeModal={close} id={board._id} title={board.title} />
      </UniversalModal>
    </>
  );
};
