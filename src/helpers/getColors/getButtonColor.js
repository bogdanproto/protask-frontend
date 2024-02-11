export const getButtonColor = ({ value, theme }) => {
  switch (value) {
    case 'column':
      return theme.colors.secondBackgroundColor;
    case 'card':
      return theme.colors.accentColor;

    default:
      return theme.colors.accentColor;
  }
};
