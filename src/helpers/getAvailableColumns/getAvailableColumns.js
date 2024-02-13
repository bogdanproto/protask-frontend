export const getAvailableColumns = (columns, columnId) => {
  return columns
    .filter(column => column._id !== columnId)
    .sort((prevColumn, nextColumn) =>
      prevColumn.title.localeCompare(nextColumn.title)
    );
};
