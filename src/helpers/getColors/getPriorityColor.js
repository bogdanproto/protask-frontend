export const getPriorityColor = ({ priority, theme }) => {
  switch (priority) {
    case 'without priority':
      return theme.labelGray;
    case 'low':
      return theme.labelBlue;
    case 'medium':
      return theme.labelRosa;
    case 'high':
      return theme.labelGreen;

    default:
      return theme.labelGray;
  }
};
