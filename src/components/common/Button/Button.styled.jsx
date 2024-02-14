import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 287px;
  height: 49px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  background: ${props => props.theme.colors.mainAccentColor};
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.headerBackgroundColor};

  &:hover {
    background: ${props => props.theme.colors.secondAccentColor};
  }
`;
