import { Icon } from 'components/common/Icon/Icon';
import { BtnContainer } from './BoardsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteBoard } from 'redux/dataSlice/operations/board/deleteBoard';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { BoardForm } from 'components/BoardForm/BoardForm';
import { useModal } from 'hooks/useModal';
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
    <>
      <Icon width={18} height={18} id={`icon-project_${board.icon}`}></Icon>
      <h3>{board.title}</h3>

      {active === true && (
        <BtnContainer>
          <button type="button" data-id={board._id} onClick={toggle}>
            <Icon width={16} height={16} id={'icon-pencil'}></Icon>
          </button>
          <button type="button" data-id={board._id} onClick={handleDelete}>
            <Icon width={16} height={16} id={'icon-trash'}></Icon>
          </button>
        </BtnContainer>
      )}
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm closeModal={close} id={board._id} title={board.title} />
      </UniversalModal>
    </>
  );
};
