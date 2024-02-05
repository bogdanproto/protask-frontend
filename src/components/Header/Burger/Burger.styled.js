import styled from 'styled-components';

export const Menu = styled.div`
  svg {
    stroke: ${p => p.theme.colors.white};
  }
  
  @media (min-width: 1440px) {
            display: none;
        }
`;
