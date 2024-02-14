const defaultTheme = {
  cubicTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  labelGray: '#6b6b6b',
  labelBlue: '#8FA1D0',
  labelRosa: '#E09CB5',
  labelGreen: '#BEDBB0',

  spacing: value => `${value * 2}px`,

  radius: '8px',
};

export const dark = {
  ...defaultTheme,
  colors: {
    // ======= Backgrounds =======

    sidebarBackground: '#121212',
    headerBackgroundColor: '#161616',
    homepageBackgroundColor: '#1F1F1F',

    // ======= Fonts =======

    mainFontColor: '#FFFFFF',
    secondFontColor: '#FFFFFF',

    // ======= Button Icons colors =======

    addBoardIconColor: '#BEDBB0',
    addColumnIconColor: '#FFFFFF',
    addCardButtonColor: '#161616',
    actionButtonColor: '#FFFFFF',
    exitButtonColor: '#BEDBB0',

    // ======= Accent colors =======

    mainAccentColor: '#BEDBB0',
  },
};

export const light = {
  ...defaultTheme,
  colors: {
    // ======= Backgrounds =======

    sidebarBackground: '#FFFFFF',
    headerBackgroundColor: '#FCFCFC',
    homepageBackgroundColor: '#F6F6F7',

    // ======= Fonts =======

    mainFontColor: '#161616',
    secondFontColor: '#161616',

    // ======= Button Icons colors =======

    addBoardIconColor: '#BEDBB0',
    addColumnIconColor: '#161616',
    addCardButtonColor: '#161616',
    actionButtonColor: '#161616',
    exitButtonColor: '#BEDBB0',

    // ======= Accent colors =======

    mainAccentColor: '#BEDBB0',
  },
};

export const violet = {
  ...defaultTheme,
  colors: {
    // ======= Backgrounds =======

    sidebarBackground: '#5255bc',
    headerBackgroundColor: '#FFFFFF',
    homepageBackgroundColor: '#ECEDFD',

    // ======= Fonts =======

    mainFontColor: '#161616',
    secondFontColor: '#FFFFFF',

    // ======= Button Icons colors =======

    addBoardIconColor: '#B8BCFD',
    addColumnIconColor: '#5255BC',
    addCardButtonColor: '#FFFFFF',
    actionButtonColor: '#161616',
    exitButtonColor: '#FFFFFF',

    // ======= Accent colors =======

    mainAccentColor: '#5255BC',
  },
};
