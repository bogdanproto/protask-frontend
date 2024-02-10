import styled from 'styled-components';

export const EditButtonWrapper = styled.div`
  padding: ${p => p.theme.spacing(2)};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  color: ${p => p.theme.colors.fontColor};
  background-color: transparent;
  
  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: ${p => p.theme.colors.accentColor};
    }
`;
