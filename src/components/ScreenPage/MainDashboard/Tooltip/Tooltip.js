import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Back, Button, TooltipContainer, OptionList } from './Tooltip.styled';

import { selectAllCardsOfBoard } from 'redux/dataSlice/selectors';
import { MoveIcon } from 'components/common/IconsLibrary';

export const Tooltip = () => {
  const columns = useSelector(selectAllCardsOfBoard);
  const [isOpened, setOpened] = useState(false);
  console.log(columns);

  const toggleOpen = () => {
    setOpened(!isOpened);
  };

  return (
    <Back>
      <Button onClick={toggleOpen}>
        <MoveIcon size={16} />
        {isOpened && (
          <TooltipContainer className="opened">
            <OptionList>
              {columns.map(column => (
                <li key={column._id}>
                  <button>{column.title}</button>
                </li>
              ))}
            </OptionList>
          </TooltipContainer>
        )}
      </Button>
    </Back>
  );
};
