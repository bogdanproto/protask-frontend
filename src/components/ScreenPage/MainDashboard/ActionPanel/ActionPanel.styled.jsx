import styled from 'styled-components';

export const ActionContainer = styled.div`
  height: 31px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 135px;
  height: 200px;
  /* background-color: gray; */
  outline: 3px solid yellow;
  scale: 0;

  &.opened {
    scale: 1;
    z-index: 99999999;
  }
`;
