import styled from 'styled-components';

export const ColumnFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 24px;
  border-radius: 8px;
  background: ${props => props.theme.colors.background};

  button {
    margin-top: 10px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.titleColor};
  }
`;
