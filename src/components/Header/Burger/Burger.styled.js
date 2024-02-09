import styled from 'styled-components';

export const Menu = styled.div`
  svg {
    stroke: ${p => p.theme.colors.inputColor};
  }
  
  @media (min-width: 1440px) {
            display: none;
        }
`;
