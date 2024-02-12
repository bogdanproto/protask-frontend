import React from 'react';
import {
  Answer,
  DogImage,
  FlagImage,
  Mystery,
  NotFoundButton,
  NotFoundStyled,
  NotFoundTitle,
  Paragraph404,
  ParagraphErr,
  ParagraphText,
  Question,
  SpotImage,
} from './NotFound.styled';
import dogImage from 'data/img/img_notFound_dog.png';
import flagImage from 'data/img/img_notFoun_flag.png';
import spotImage from 'data/img/Vector.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <NotFoundStyled>
      <NotFoundTitle>Oh!</NotFoundTitle>

      <ParagraphText>
        We can’t sniff out the page you are looking for.
      </ParagraphText>
      <ParagraphErr>Page not found</ParagraphErr>
      <Paragraph404>404</Paragraph404>
      <NotFoundButton>
        <Link to="/">Back to home</Link>
      </NotFoundButton>
      <Mystery>
        <Question>Who are the best?</Question>
        <Answer>Ukrainians are the best!!!</Answer>
        <FlagImage src={flagImage} width="150" alt="flag" />
      </Mystery>
      <SpotImage src={spotImage} width="150" alt="dog" />
      <DogImage src={dogImage} width="150" alt="dog" />
    </NotFoundStyled>
  );
};
