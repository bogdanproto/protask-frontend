import { NotifyModule } from 'components/Notify';
import { RoutesComp } from 'components/Routes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authSlice/operations';
import { selectThemeUser, selectUpdating } from 'redux/authSlice/selectors';
import { ThemeProvider } from 'styled-components';
import * as theme from 'globalStyles/index.js';
import { GlobalStyle } from 'globalStyles/GlobalStyle';

export const App = () => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(selectUpdating);
  const themeType = useSelector(selectThemeUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[themeType]}>
      <NotifyModule />
      <GlobalStyle />
      {!isUpdating && <RoutesComp />}
    </ThemeProvider>
  );
};
