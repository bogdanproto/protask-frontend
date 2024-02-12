import styled from 'styled-components';
import Modal from 'react-modal';

export const TooltipContainer = styled.div`
  position: absolute;
  bottom: calc(-100% + 18px);
  right: 62px;
  overflow: visible;
  /* transform: translateX(-50%); */

  width: 135px;

  padding: ${p => p.theme.spacing(5)} 0;
  background-color: ${p => p.theme.colors.thirdBackgroundColor};
  /* outline: 2px solid tomato; */
  border-radius: 12px;

  /* scale: 0; */
  z-index: 99;

  /* &.opened {
    scale: 1;
  } */

  

  &:hover {
    color: ${p => p.theme.colors.accentColor};
    
  }
`;

export const TargetColumnsList = styled.ul`
  display: grid;
  grid-template-rows: 29px;
  grid-auto-rows: 29px;
`;

export const TargetColumnButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  height: 29px;
  width: 135px;
  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(9)};
  color: ${p => p.theme.colors.fontColor};

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const ColumnTitle = styled.div`
  width: 75px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: start;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
