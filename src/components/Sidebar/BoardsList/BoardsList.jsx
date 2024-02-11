import { Boards, Title, CreateButton, List, Item } from './BoardsList.styled';
import { BoardsItem } from 'components/Sidebar/BoardsItem/BoardsItem';
import { Btn } from 'components/common/Btn/Btn';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';
import { BoardForm } from 'components/BoardForm/BoardForm';
import { useSelector } from 'react-redux';
import { selectActiveBoard, selectAllBoard } from 'redux/dataSlice/selectors';
import { useNavigate } from 'react-router';

export const BoardsList = () => {
  const navigate = useNavigate();

  const { isOpen, close, toggle } = useModal();

  const boards = useSelector(selectAllBoard);
  const activeBoard = useSelector(selectActiveBoard);

  const handleClick = (id, evt) => {
    if (evt.target?.closest('button')) {
      return;
    }
    navigate(id);
  };

  return (
    <Boards>
      <Title>My Boards</Title>
      <CreateButton>
        <span>Create a new board</span>
        <Btn onClick={toggle} variant="plus"></Btn>
      </CreateButton>
      <List>
        {boards.map(item => (
          <Item
            key={item._id}
            className={activeBoard?._id === item._id ? 'active' : null}
            onClick={evt => handleClick(item._id, evt)}
          >
            <BoardsItem
              board={item}
              active={activeBoard?._id === item._id ? true : false}
            />
          </Item>
        ))}
      </List>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm closeModal={close} />
      </UniversalModal>
    </Boards>
  );
};
