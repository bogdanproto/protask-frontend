import styled from 'styled-components';
import Modal from 'react-modal';

export const TooltipContainer = styled(Modal)`
  width: 750px;

  padding: ${p => p.theme.spacing(5)} 0;
  background-color: ${p => p.theme.colors.thirdBackgroundColor};
  outline: 2px solid tomato;
  border-radius: 12px;
  background-color: tomato;

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

export const customStyles = {
  overlay: {
    position: 'absoltute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  content: {
    //position: 'absolute',
    //top: '50%',
    //left: '50%',
    //right: '0',
    //bottom: 'auto',
    //marginRight: '-50%',
    //transform: 'translateY(-50%)',
  },
};
