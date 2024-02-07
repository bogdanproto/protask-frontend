import { CardContainer, CardTitle, CardDescription } from './Card.styled';

export const Card = ({ card }) => {
  return (
    <CardContainer>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
    </CardContainer>
  );
};
