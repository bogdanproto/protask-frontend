import styled from 'styled-components';

export const WelcomeTitleStyled = styled.h1`
  min-width: 280px;
  width: calc(100vw - 40px);
  max-width: 335px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.fontColor};

  @media (min-width: 767px) {
    max-width: 473px;
    height: 36px;
  }
`;
