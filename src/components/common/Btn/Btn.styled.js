import styled from 'styled-components';

export const Button = styled.button`
  &.btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
      stroke: ${p => p.theme.colors.btnColor};
      background: ${p => p.theme.colors.btnBackground};
      padding: 7px;
      border-radius: 6px;
    }
  }

  svg {
    stroke: ${p => p.theme.colors.btnBackground};
  }
`;
