import styled from 'styled-components';

export const NotFoundStyled = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  background-color: #212121;
  color: white;
  padding: 20px;
  text-align: center;

  @media (min-width: 1440px) {
    padding: 40px;
  }
`;

export const NotFoundTitle = styled.h6`
  font-family: 'Ultra', sans-serif;
  font-size: 40px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    font-size: 60px;
  }
`;

export const ParagraphText = styled.p`
  font-size: 15px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const Paragraph404 = styled.p`
  font-weight: 600;
  font-size: 100px;
  margin-bottom: 10px;
  color: #6a63fe;

  @media (min-width: 1440px) {
    font-size: 130px;
  }
`;

export const NotFoundButton = styled.div`
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: white;
  width: fit-content;
  color: #212121;
  padding: 8px 10px;
  margin: 0 auto;
  border-bottom: 4px solid #fac515;
  border-left: 1px solid #fac515;
  border-right: 4px solid #fac515;
  border-top: 1px solid #fac515;
  border-radius: 6px;
  cursor: pointer;

  @media (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ParagraphErr = styled.p`
  font-size: 20px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const DogImage = styled.img`
  position: absolute;
  width: 120px;
  bottom: 10%;
  right: 10%;

  @media (min-width: 768px) {
    width: 150px;
  }

  @media (min-width: 1440px) {
    width: 150px;
  }
`;

export const SpotImage = styled.img`
  position: absolute;
  width: 600px;
  top: 40%;
  left: 60%;
`;

export const Mystery = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  text-align: left;
`;

export const Question = styled.p`
  font-size: 16px;
  margin-bottom: 8px;

  @media (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Answer = styled.p`
  font-size: 12px;
  height: 200px;
  width: 300px;
  text-align: left;

  @media (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const FlagImage = styled.img`
  position: absolute;

  top: 35%;
  left: 10%;
`;
