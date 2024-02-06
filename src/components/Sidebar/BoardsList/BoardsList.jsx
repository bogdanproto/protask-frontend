import { useState } from 'react';
import { Boards, Title, CreateButton, List, Item } from './BoardsList.styled';
import { BoardsItem } from 'components/Sidebar/BoardsItem/BoardsItem';
import { Btn } from 'components/common/Btn/Btn';

export const BoardsList = () => {
    const projects = [{
        _id: 1,
        icon: 'icon-project',
        name: 'Project office'
    }, {
        _id: 2,
        icon: 'icon-puzzle',
        name: 'Neon Light Project'
        }]
    
    const [isActive, setActive] = useState(null);

    const toggleClass = (i) => {
        setActive(i);
    };

    return (
        <Boards>
            <Title>My Boards</Title>
            <CreateButton>
                <span>Create a new board</span>
                <Btn variant="plus"></Btn>
            </CreateButton>
            <List>
            {projects.map(item => (
                <Item key={item._id} id={item._id} className={isActive === item._id ? 'active' : null} onClick={() => toggleClass(item._id)} >
                    <BoardsItem project={item} active={isActive === item._id ? true : false}/>
                </Item>
            ))}
            </List>
        </Boards>
    );
};