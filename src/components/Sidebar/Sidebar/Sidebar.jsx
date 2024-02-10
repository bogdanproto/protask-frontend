import { routes } from 'const/routes/routes.js';
import {
  Backdrop,
  SidebarStyled,
  LogoLink,
  LogoText,
  LogOut,
} from './Sidebar.styled';
import { Btn } from 'components/common/Btn/Btn';
import { BoardsList } from '../BoardsList/BoardsList';
import { Support } from '../Support/Support';
import { Icon } from 'components/common/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/authSlice/operations';
import { toggleSidebar } from 'redux/uiSlice';
import { selectIsOpenSidebar } from 'redux/uiSlice/selectors';

export const Sidebar = () => {
  const burgerVisible = useSelector(selectIsOpenSidebar);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  console.log(window.innerWidth);

  const screenVisible = false ? screenWidth < 1440 : screenWidth > 1440;
  const visible = screenVisible || burgerVisible;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <Backdrop isvisible={visible.toString()} onClick={handleBackdropClick}>
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
          <Btn
            onClick={() => dispatch(logOutUser())}
            text="Log Out"
            variant="logout"
          ></Btn>
        </LogOut>
      </SidebarStyled>
    </Backdrop>
  );
};
