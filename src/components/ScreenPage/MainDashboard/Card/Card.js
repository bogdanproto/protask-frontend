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

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { CardForm } from 'components/CardForm/CardForm';
import { useModal } from 'hooks/useModal';
// ========================

export const Card = ({
  columnId,
  card: { _id, title, description, priority, deadline },
}) => {
  const { isOpen, close, toggle } = useModal();
  const [isExpanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CardContainer priority={priority}>
      <TopBox
        className={isExpanded ? 'expanded' : ''}
        onDoubleClick={toggleHeight}
        onTouchStart={toggleHeight}
      >
        <CardTitle className={isExpanded ? 'expanded' : ''}>{title}</CardTitle>
        <CardDescription className={isExpanded ? 'expanded' : ''}>
          {description}
        </CardDescription>
      </TopBox>
      <BottomBox>
        <InfoPanel priority={priority} deadline={deadline} />
        <ActionPanel columnId={columnId} cardId={_id} onEditButton={toggle} />
      </BottomBox>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <CardForm
          cardId={_id}
          title={title}
          description={description}
          priority={priority}
          deadline={deadline}
          closeModal={close}
        />
      </UniversalModal>
    </CardContainer>
  );
};
