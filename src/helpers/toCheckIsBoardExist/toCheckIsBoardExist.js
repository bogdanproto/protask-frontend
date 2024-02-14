export const toCheckIsBoardExist = (id, boards) => {
  if (id) {
    return boards.find(board => board._id === id)?._id;
  }
  return null;
};
