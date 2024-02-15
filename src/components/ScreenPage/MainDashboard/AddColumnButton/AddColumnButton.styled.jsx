import styled from 'styled-components';

export const AddButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  min-width: 280px;
  width: calc(100vw - 40px);
  max-width: 335px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.cardBackgroundColor};
  color: ${p => p.theme.colors.mainFontColor};
  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: ${p => p.theme.colors.mainFontColor};
    color: ${p => p.theme.colors.cardBackgroundColor};

    div {
      color: ${p => p.theme.colors.addColumnIconColor};
      background-color: ${p => p.theme.colors.addColumnIconColor2};
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.addColumnIconColor2};
  background-color: ${p => p.theme.colors.addColumnIconColor};
  border-radius: 8px;
  transition: all ${p => p.theme.cubicTransition};
`;

export const ButtonTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;

  &::first-letter {
    text-transform: capitalize;
  }
`;
