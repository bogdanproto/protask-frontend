import styled from 'styled-components';

export const BtnContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  button {
    line-height: 0;
    color: ${p => p.theme.colors.logoutText};

    svg {
      opacity: 0.5;
    }
  }
`;
