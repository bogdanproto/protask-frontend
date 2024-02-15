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
    // ======= Logo =======

    logoBackgroundColor: '#1F1F1F',
    logoFillColor: '#FFFFFF',

    // ======= Avatar =======

    AvatarBackgroundColor: '#BEDBB0',
    PlusBackgroundColor: '#121212',

    // ======= Backgrounds =======

    sidebarBackgroundColor: '#121212',
    headerBackgroundColor: '#161616',
    homepageBackgroundColor: '#1F1F1F',
    cardBackgroundColor: '#121212',
    authPopupBackgroundColor: '#151515',
    modalPopupBackgroundColor: '#151515',
    activeBoardBackgroundColor: 'rgba(31, 31, 31, 0.4)',
    needHelpBackgroundColor: '#1F1F1F',

    // ======= Fonts =======

    mainFontColor: '#FFFFFF',
    secondFontColor: '#FFFFFF',
    thirdFontColor: 'rgba(255, 255, 255, 0.5)',

    // ======= Button Icons colors =======

    addBoardIconColor: '#BEDBB0',
    addBoardIconColor2: '#121212',
    addColumnIconColor: '#FFFFFF',
    addColumnIconColor2: '#161616',
    addCardButtonColor: '#161616',
    addCardButtonColor2: '#FFFFFF',
    actionButtonColor: '#FFFFFF',
    exitButtonColor: '#BEDBB0',

    // ======= Accent colors =======

    mainAccentColor: '#BEDBB0',
    secondAccentColor: '#9DC888',
    thirdAccentColor: '#BEDBB0',

    // ======= Scrollbar =======

    scrollbarTrackColor: 'rgba(255, 255, 255, 0.08)',
    scrollbarThumbColor: 'rgba(255, 255, 255, 0.1)',

    // ======= Other decors =======

    cardLineColor: 'rgba(255, 255, 255, 0.1)',
    sidebarLineColor: 'rgba(255, 255, 255, 0.1)',
    radioButtonGray: '#ffffff2e',
    underlineColor: '#FFFFFF1A',
  },
};

export const light = {
  ...defaultTheme,
  colors: {
    // ======= Logo =======

    logoBackgroundColor: '#1F1F1F',
    logoFillColor: '#FFFFFF',

    // ======= Avatar =======

    AvatarBackgroundColor: '#BEDBB0',
    PlusBackgroundColor: '#121212',

    // ======= Backgrounds =======

    sidebarBackgroundColor: '#FFFFFF',
    headerBackgroundColor: '#FCFCFC',
    homepageBackgroundColor: '#F6F6F7',
    cardBackgroundColor: '#FFFFFF',
    authPopupBackgroundColor: '#151515',
    modalPopupBackgroundColor: '#FCFCFC',
    activeBoardBackgroundColor: 'rgba(246, 246, 247, 0.4)',
    needHelpBackgroundColor: '#F6F6F7',

    // ======= Fonts =======

    mainFontColor: '#161616',
    secondFontColor: '#161616',
    thirdFontColor: 'rgba(22, 22, 22, 0.7)',

    // ======= Button Icons colors =======

    addBoardIconColor: '#BEDBB0',
    addBoardIconColor2: '#121212',
    addColumnIconColor: '#161616',
    addColumnIconColor2: '#FFFFFF',
    addCardButtonColor: '#161616',
    addCardButtonColor2: '#FFFFFF',
    actionButtonColor: '#161616',
    exitButtonColor: '#BEDBB0',

    // ======= Accent colors =======

    mainAccentColor: '#BEDBB0',
    secondAccentColor: '#9DC888',
    thirdAccentColor: '#BEDBB0',

    // ======= Scrollbar =======

    scrollbarTrackColor: '#FFFFFF',
    scrollbarThumbColor: '#E8E8E8',

    // ======= Other decors =======

    cardLineColor: 'rgba(22, 22, 22, 0.1)',
    sidebarLineColor: 'rgba(22, 22, 22, 0.1)',
    radioButtonGray: '#0000002f',
    underlineColor: '#1616161A',
  },
};

export const violet = {
  ...defaultTheme,
  colors: {
    // ======= Logo =======

    logoBackgroundColor: '#ECEDFD',
    logoFillColor: '#5255BC',

    // ======= Avatar =======

    AvatarBackgroundColor: '#B8BCFD',
    PlusBackgroundColor: '#121212',

    // ======= Backgrounds =======

    sidebarBackgroundColor: '#5255bc',
    headerBackgroundColor: '#FFFFFF',
    homepageBackgroundColor: '#ECEDFD',
    cardBackgroundColor: '#FFFFFF',
    authPopupBackgroundColor: '#151515',
    modalPopupBackgroundColor: '#FCFCFC',
    activeBoardBackgroundColor: 'rgba(255, 255, 255, 0.2)',
    needHelpBackgroundColor: 'rgba(236, 237, 253, 0.4)',

    // ======= Fonts =======

    mainFontColor: '#161616',
    secondFontColor: '#FFFFFF',
    thirdFontColor: 'rgba(22, 22, 22, 0.7)',

    // ======= Button Icons colors =======

    addBoardIconColor: '#B8BCFD',
    addBoardIconColor2: '#FFFFFF',
    addColumnIconColor: '#5255BC',
    addColumnIconColor2: '#FFFFFF',
    addCardButtonColor: '#FFFFFF',
    addCardButtonColor2: '#161616',
    actionButtonColor: '#161616',
    exitButtonColor: '#FFFFFF',

    // ======= Accent colors =======

    mainAccentColor: '#5255BC',
    secondAccentColor: '#7B7EDE',
    thirdAccentColor: '#FFFFFF',

    // ======= Scrollbar =======

    scrollbarTrackColor: '#FFFFFF',
    scrollbarThumbColor: '#B8BCFD',

    // ======= Other decors =======

    cardLineColor: 'rgba(22, 22, 22, 0.1)',
    sidebarLineColor: 'rgba(255, 255, 255, 0.1)',
    radioButtonGray: '#0000002f',
  },
};
