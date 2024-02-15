import styled from 'styled-components';

export const AddButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  width: 100%;
  height: 49px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.mainAccentColor};
  color: ${p => p.theme.colors.secondFontColor};
  font-size: 14px;
  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: ${p => p.theme.colors.secondAccentColor};
  }

  &:disabled {
    background-color: ${p => p.theme.colors.cardLineColor};
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  border-radius: 6px;
  background-color: ${p => p.theme.colors.addCardButtonColor};

  svg {
    width: 18px;
    height: 18px;
    fill: ${p => p.theme.colors.addCardButtonColor2};
  }
`;
