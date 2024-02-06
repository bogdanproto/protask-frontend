import styled from 'styled-components';

export const WelcomeTitleStyled = styled.h1`
  width: 335px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.fontColor};

  @media (min-width: 375px) and (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1439px) {
  }
`;
