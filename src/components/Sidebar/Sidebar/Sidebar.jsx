import {
  Backdrop,
  SidebarStyled,
  LogoLink,
  LogoText,
  LogOut,
  IconWrapper,
  ButtonTitle,
} from './Sidebar.styled';
// import { Btn } from 'components/common/Btn/Btn';
import { BoardsList } from '../BoardsList/BoardsList';
import { Support } from '../Support/Support';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/authSlice/operations';
import { toggleSidebar } from 'redux/uiSlice';
import { selectIsOpenSidebar } from 'redux/uiSlice/selectors';
import { LogOutIcon, LogoIcon } from 'components/common/IconsLibrary/index';

export const Sidebar = () => {
  const burgerVisible = useSelector(selectIsOpenSidebar);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  const screenVisible = false ? screenWidth < 1440 : screenWidth > 1440;
  const visible = screenVisible || burgerVisible;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <Backdrop $isvisible={visible.toString()} onClick={handleBackdropClick}>
      <SidebarStyled $isvisible={visible.toString()}>
        <div>
          <LogoLink>
            <div>
              <LogoIcon width={12} height={16} />
            </div>
            <LogoText>Task Pro</LogoText>
          </LogoLink>
          <BoardsList />
        </div>
        <div>
          <Support />
          <LogOut type="button" onClick={() => dispatch(logOutUser())}>
            <IconWrapper>
              <LogOutIcon size={32} />
            </IconWrapper>
            <ButtonTitle>Log Out</ButtonTitle>
          </LogOut>
        </div>
      </SidebarStyled>
    </Backdrop>
  );
};
