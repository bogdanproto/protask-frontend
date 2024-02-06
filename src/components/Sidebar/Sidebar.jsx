import { routes } from 'const/routes/routes.js';
import { SidebarStyled, LogoLink, LogoText } from './Sidebar.styled';
import { LogoSvg } from 'components/common/LogoSvg/LogoSvg'
import { Btn } from 'components/common/Btn/Btn';
import { BoardsList } from './BoardsList/BoardsList'

export const Sidebar = () => {
    return (
        <SidebarStyled>
            <LogoLink to={routes.HOME}> 
                <LogoSvg></LogoSvg>
                <LogoText>Task Pro</LogoText>
            </LogoLink>
            <BoardsList></BoardsList>
            <Btn text="Log Out" variant="logout"></Btn>
        </SidebarStyled>
    );
};