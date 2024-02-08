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
import { useEffect, useState } from 'react';
import { selectIsOpenSidebar } from 'redux/burgerSlice/selectors';
import { isToggleSidebar } from 'redux/burgerSlice';

export const Sidebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const burgerVisible = useSelector(selectIsOpenSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // При розмонтуванні компоненту видаляємо обробник подій
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // ефект потрібно виконати лише один раз, при монтуванні

  const screenVisible = false ? screenWidth < 1440 : screenWidth > 1440;
  const visible = screenVisible || burgerVisible;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(isToggleSidebar());
    }
  };

  return (
    <Backdrop isVisible={visible} onClick={handleBackdropClick}>
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
