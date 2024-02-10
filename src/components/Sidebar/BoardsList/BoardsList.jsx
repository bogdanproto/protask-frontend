import { useState } from 'react';
import { Boards, Title, CreateButton, List, Item } from './BoardsList.styled';
import { BoardsItem } from 'components/Sidebar/BoardsItem/BoardsItem';
import { Btn } from 'components/common/Btn/Btn';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';
import { BoardForm } from 'components/BoardForm/BoardForm';

export const BoardsList = () => {
  const projects = [
    {
      _id: 1,
      icon: 'icon-project_hexagon',
      name: 'Project office',
    },
    {
      _id: 2,
      icon: 'icon-project_puzzle',
      name: 'Neon Light Project',
    },
    {
      _id: 3,
      icon: 'icon-project_colors',
      name: 'Neon Dark Project',
    },
    {
      _id: 4,
      icon: 'icon-project_container',
      name: 'Test Project',
    },
    {
      _id: 5,
      icon: 'icon-project_hexagon',
      name: 'My Project',
    },
    {
      _id: 6,
      icon: 'icon-project_lightning',
      name: 'Lorem ipsum Project',
    },
  ];

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
        {projects.map(item => (
          <Item
            key={item._id}
            id={item._id}
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
