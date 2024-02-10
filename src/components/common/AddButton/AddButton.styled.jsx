import styled from 'styled-components';

export const AddButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  width: 334px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${({ theme }) => theme.colors.btnPrimary};
  color: ${p => p.theme.colors.fontColor};
  font-size: 14px;
  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: ${p => p.theme.colors.btnPrimaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.btnDisabled};
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  border-radius: 6px;
  background-color: ${p => p.theme.colors.iconBox};

  svg {
    width: 18px;
    height: 18px;
    fill: ${p => p.theme.colors.iconInvert};
  }
`;
