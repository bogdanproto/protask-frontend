// import { useDispatch } from 'react-redux';

// import { MoveIcon } from 'components/common/IconsLibrary';
// import {
//   TooltipContainer,
//   TargetColumnsList,
//   TargetColumnButton,
//   ColumnTitle,
//   Div,
// } from './MoveTooltip.styled';
// import { changeCardsColumn } from 'redux/dataSlice/operations';

// // ========================

// export const MoveTooltip = ({ cardId, targetColumns }) => {
//   const dispatch = useDispatch();

//   const onMoveButton = ({ _id, columnId }) => {
//     dispatch(changeCardsColumn({ _id, columnId }));
//   };
//   return <Div>{cardId}</Div>;
// };

// return (
//   <TooltipContainer className="opened">
//     <TargetColumnsList>
//       {targetColumns.map(column => (
//         <li key={column._id}>
//           <TargetColumnButton
//             type="button"
//             onClick={() =>
//               onMoveButton({ _id: cardId, columnId: column._id })
//             }
//           >
//             <ColumnTitle>{column.title}</ColumnTitle>
//             <MoveIcon size={16} />
//           </TargetColumnButton>
//         </li>
//       ))}
//     </TargetColumnsList>
//   </TooltipContainer>
// );
