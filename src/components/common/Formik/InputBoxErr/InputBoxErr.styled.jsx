import styled from 'styled-components';

export const InputBoxErr = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.modalPopupBackgroundColor};
  border-radius: 8px;

  div {
    position: absolute;

    padding-left: 8px;
    font-size: 12px;
    color: #9a0707;
  }
`;
