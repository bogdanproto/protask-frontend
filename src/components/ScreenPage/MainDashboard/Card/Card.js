import { InfoPanel } from '../InfoPanel/InfoPanel';
import { ActionPanel } from '../ActionPanel/ActionPanel';
import {
  CardContainer,
  TopBox,
  CardTitle,
  CardDescription,
  BottomBox,
} from './Card.styled';

const title =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa';

const description =
  'Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements.';

const priorityList = ['without', 'low', 'medium', 'high'];

const priority = priorityList[0];

const deadline = '15/05/2023';
console.log(priority);

export const Card = () => {
  return (
    <CardContainer priority={priority}>
      <TopBox>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TopBox>
      <BottomBox>
        <InfoPanel priority={priority} deadline={deadline} />
        <ActionPanel />
      </BottomBox>
    </CardContainer>
  );
};
