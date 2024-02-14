import styled from 'styled-components';

export const BoardFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 335px;

  border-radius: 8px;
  background: tomato;

  button {
    margin-top: 10px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.mainFontColor};
  }

  h2 {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.mainFontColor};
  }
`;
