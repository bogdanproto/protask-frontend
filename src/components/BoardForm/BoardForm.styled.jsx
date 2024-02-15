import styled from 'styled-components';

export const BoardFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  min-width: 232px;
  width: calc(100vw - 88px);
  max-width: 287px;
  box-sizing: content-box;
  padding: 4px;

  border-radius: 8px;

  @media (min-width: 768px) {
    min-width: 302px;
    max-width: 302px;
  }

  button {
    margin-top: 10px;
    background-color: ${props => props.theme.colors.mainAccentColor};
    transition: all ${p => p.theme.cubicTransition};
    /* 
    &:hover {
      background-color: ${props => props.theme.colors.secondAccentColor};
    } */
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.mainFontColor};
  }

  h4 {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.mainFontColor};
  }
`;
