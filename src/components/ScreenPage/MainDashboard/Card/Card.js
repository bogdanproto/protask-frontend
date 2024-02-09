import { useState } from 'react';

import { InfoPanel } from '../InfoPanel/InfoPanel';
import { ActionPanel } from '../ActionPanel/ActionPanel';
import {
  CardContainer,
  TopBox,
  CardTitle,
  CardDescription,
  BottomBox,
} from './Card.styled';

export const Card = ({ card }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CardContainer priority={card.priority}>
      <TopBox className={isExpanded ? 'expanded' : ''} onClick={toggleHeight}>
        <CardTitle className={isExpanded ? 'expanded' : ''}>
          {card.title}
        </CardTitle>
        <CardDescription className={isExpanded ? 'expanded' : ''}>
          {card.description}
        </CardDescription>
      </TopBox>
      <BottomBox>
        <InfoPanel priority={card.priority} deadline={card.deadline} />
        <ActionPanel />
      </BottomBox>
    </CardContainer>
  );
};
