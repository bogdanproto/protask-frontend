import { useState } from 'react';
import { Boards, Title, CreateButton, List, Item } from './BoardsList.styled';
import { BoardsItem } from 'components/Sidebar/BoardsItem/BoardsItem';
import { Btn } from 'components/common/Btn/Btn';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';
import { BoardForm } from 'components/BoardForm/BoardForm';
import { useSelector } from 'react-redux';
import { selectAllBoard } from 'redux/dataSlice/selectors';

export const BoardsList = () => {
  const allProjects = useSelector(selectAllBoard);
  console.log(allProjects);

  const [isActive, setActive] = useState(null);
  const { isOpen, close, toggle } = useModal();

  const toggleClass = i => {
    setActive(i);
  };

  return (
    <Boards>
      <Title>My Boards</Title>
      <CreateButton>
        <span>Create a new board</span>
        <Btn onClick={toggle} variant="plus"></Btn>
      </CreateButton>
      <List>
        {allProjects.map(item => (
          <Item
            key={item._id}
            className={isActive === item._id ? 'active' : null}
            onClick={() => toggleClass(item._id)}
          >
            <BoardsItem
              project={item}
              active={isActive === item._id ? true : false}
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
