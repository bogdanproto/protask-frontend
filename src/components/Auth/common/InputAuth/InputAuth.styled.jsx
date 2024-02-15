import styled from 'styled-components';

export const InputAuthStyled = styled.input`
  /* normal */
  position: relative;
    
  box-sizing: border-box;

  width: 100%;
  height: 49px;

  background-color: #1f1f1f;
  border: 1px solid rgba(190, 219, 176, 0.4);
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  letter-spacing: -0.02em;

  color: rgba(255, 255, 255, 0.4);

  transition: all ${p => p.theme.cubicTransition};

  &:focus {
    border: 1px solid #bedbb0;
    color: #ffffff;
  }
`;
