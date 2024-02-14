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

// ==========================================

// ColumnsList

// return (
//   <DragDropContext onDragEnd={handleDraqDrop}>
//     <Droppable droppableId="ROOT" type="group">
//       {provided => (
//         <List {...provided.droppableProps} ref={provided.innerRef}>
//           {columns.map((column, index) => (
//             <Draggable
//               draggableId={column._id}
//               key={column._id}
//               index={index}
//             >
//               {provided => (
//                 <div
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   ref={provided.innerRef}
//                 >
//                   <Column column={column} />
//                 </div>
//               )}
//             </Draggable>
//           ))}
//           {provided.placeholder}
//         </List>
//       )}
//     </Droppable>
//   </DragDropContext>
// );

// ======================================

// function bgcolorChange(props) {
//   return props.isDragging
//     ? 'lightgreen'
//     : props.isDraggable
//     ? props.isBacklog
//       ? '#F2D7D5'
//       : '#DCDCDC'
//     : props.isBacklog
//     ? '#F2D7D5'
//     : '#FFFADA';
// }
