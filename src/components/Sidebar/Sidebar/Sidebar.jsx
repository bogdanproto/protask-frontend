import { routes } from 'const/routes/routes.js';
import { Backdrop, SidebarStyled, LogoLink, LogoText, LogOut } from './Sidebar.styled';
import { Btn } from 'components/common/Btn/Btn';
import { BoardsList } from '../BoardsList/BoardsList';
import { Support } from '../Support/Support'
import { Icon } from 'components/common/Icon/Icon'
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/authSlice/operations';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logOutUser());
    };
    
    return (
        <Backdrop>
            <SidebarStyled>
                <LogoLink to={routes.HOME}> 
                    <div>
                        <Icon width={12} height={16} id={'icon-logo-small'}></Icon>
                    </div>
                    <LogoText>Task Pro</LogoText>
                </LogoLink>
                <BoardsList></BoardsList>
                <Support></Support>
                <LogOut>
                    <Btn text="Log Out" variant="logout" clickAction={handleClick}></Btn>
                </LogOut>
            </SidebarStyled>
        </Backdrop>
    );
};