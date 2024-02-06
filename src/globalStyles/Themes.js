const defaultTheme = {
  cubicTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  labelGray: '#ffffff4d',
  labelBlue: '#8FA1D0',
  labelRosa: '#E09CB5',
  labelGreen: '#BEDBB0',
};

export const themeBlack = {
  ...defaultTheme,
  logoPath: '#logo-white',
  colors: {
    background: '#161616',
    fontColor: '#161616',
    btnBackground: '#121212',
    btnColor: '#fff',
    btnPlus: '#BEDBB0',
    btnPlusHover: '#9DC888',
    btnPrimary: '#BEDBB0',
    btnPrimaryHover: '#9DC888',
    btnSmall: '#BEDBB0',
    inputColor: '#fff',
    inputBorder: '#BEDBB0',
    white: '#fff',
    black: '#212121',
    accentColor: '#BEDBB0',
    accentColorHover: '#9DC888',
    logoutIcon: '#BEDBB0',
    logoutIconHover: '#9DC888',
    logoutText: '#fff',

    // =============
    titleColor: '#FFFFFF',
    backgroundColor: '#1F1F1F',
    // =============
  },
  spacing: value => `${value * 4}px`,
};

export const themeLight = {
  ...defaultTheme,
  logoPath: '#logo-black',
  colors: {
    background: '#fdfdfd',
    fontColor: '#161616',
    btnBackground: '#161616',
    btnColor: '#fff',
    btnPlus: '#BEDBB0',
    btnPlusHover: '#9DC888',
    btnPrimary: '#BEDBB0',
    btnPrimaryHover: '#9DC888',
    btnSmall: '#BEDBB0',
    inputColor: '#161616',
    inputBorder: '#BEDBB0',
    white: '#fff',
    black: '#212121',
    accentColor: '#BEDBB0',
    accentColorHover: '#9DC888',
    logoutIcon: '#BEDBB0',
    logoutIconHover: '#9DC888',
    logoutText: '#161616',

    // =============

    backgroundColor: '#F6F6F7',
    headerBackgroundColor: '#FCFCFC',
    sidebarBackgroundColor: '#FFFFFF',

    // =============
  },
  // spacing: value => `${value * 4}px`,
  spacing: value => `${value * 2}px`,
};

export const themeViolet = {
  ...defaultTheme,
  logoPath: '#logo-violet',
  colors: {
    background: '#d6d8ff',
    fontColor: '#161616',
    btnBackground: '#fff',
    btnColor: '#161616',
    btnPlus: '#b8bcfd',
    btnPlusHover: '#979CEA',
    btnPrimary: '#5255bc',
    btnPrimaryHover: '#7B7EDE',
    btnSmall: '#ECEDFD',
    inputColor: '#161616',
    inputBorder: '#5255bc66',
    white: '#fff',
    black: '#212121',
    accentColor: '#b8bcfd',
    accentColorHover: '#5255bc',
    logoutIcon: '#fff',
    logoutIconHover: '#B8BCFD',
    logoutText: '#fff',
  },
  spacing: value => `${value * 4}px`,
};
