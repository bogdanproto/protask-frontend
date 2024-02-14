import styled from 'styled-components';

export const AddButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  min-width: 335px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.cardBackgroundColor};

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: tomato;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.addColumnIconColor2};
  background-color: ${p => p.theme.colors.addColumnIconColor};
  border-radius: 8px;
`;

export const ButtonTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainFontColor};

  &::first-letter {
    text-transform: capitalize;
  }
`;
