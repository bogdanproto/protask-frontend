import {
  Boards,
  Title,
  CreateButton,
  IconWrapper,
  List,
  Item,
  TitlePlate,
} from './BoardsList.styled';
import { BoardsItem } from 'components/Sidebar/BoardsItem/BoardsItem';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';
import { useSelector } from 'react-redux';
import { selectActiveBoardId, selectAllBoard } from 'redux/dataSlice/selectors';
import { BoardForm } from 'components/BoardForm/BoardForm';
import { useNavigate } from 'react-router-dom';
import { PlusWhIcon } from 'components/common/IconsLibrary';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from 'redux/uiSlice';

export const BoardsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen, close, toggle } = useModal();

  const boards = useSelector(selectAllBoard);
  const activeBoard = useSelector(selectActiveBoardId);

  const handleClick = (id, evt) => {
    if (evt.target?.closest('button')) {
      return;
    }
    navigate(id);
  };

  const createBoard = () => {
    toggle();
    dispatch(toggleSidebar());
  };

  return (
    <Boards>
      <TitlePlate>
        <Title>My Boards</Title>
      </TitlePlate>
      <CreateButton onClick={createBoard}>
        <span>
          Create a<br /> new board
        </span>
        <IconWrapper>
          <PlusWhIcon width={40} height={36} />
        </IconWrapper>
      </CreateButton>
      <List>
        {boards.map(item => (
          <Item
            key={item._id}
            className={activeBoard === item._id ? 'active' : null}
            onClick={evt => handleClick(item._id, evt)}
          >
            <BoardsItem
              board={item}
              active={activeBoard === item._id ? true : false}
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
