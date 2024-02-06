import styled from 'styled-components';

export const LogoWithTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 14px;

  margin-bottom: 14px;

  h1 {
    letter-spacing: -0.04em;
    color: ${props => props.theme.colors.fontColor};
  }
`;
