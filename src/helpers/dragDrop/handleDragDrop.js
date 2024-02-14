// const handleDraqDrop = results => {
//   const { source, destination, type } = results;

//   if (!destination) return;

//   if (
//     source.droppableId === destination.droppableId &&
//     source.index === destination.index
//   )
//     return;

//   if (type === 'group') {
//     const reorderedColumns = [...columns];

//     const sourceIndex = source.index;
//     const destinationIndex = destination.index;

//     const [removedColumn] = reorderedColumns.splice(sourceIndex, 1);
//     reorderedColumns.splice(destinationIndex, 0, removedColumn);

//     return reorderedColumns;
//   }

//   const columnSourceIndex = columns.findIndex(
//     column => column._id === source.droppableId
//   );

//   const columnDestinationIndex = columns.findIndex(
//     column => column._id === destination.droppableId
//   );

//   const newSourceCards = [...columns[columnSourceIndex].cards];

//   const newDestinationCards =
//     source.droppableId !== destination.droppableId
//       ? [...columns[columnDestinationIndex].cards]
//       : newSourceCards;

//   const [deletedCards] = newSourceCards.splice(source.index, 1);

//   newDestinationCards.splice(destination.index, 0, deletedCards);

//   const newColumns = [...columns];

//   newColumns[columnSourceIndex] = {
//     ...columns[columnSourceIndex],
//     items: newSourceCards,
//   };

//   newColumns[columnDestinationIndex] = {
//     ...columns[columnDestinationIndex],
//     items: newDestinationCards,
//   };
// };
