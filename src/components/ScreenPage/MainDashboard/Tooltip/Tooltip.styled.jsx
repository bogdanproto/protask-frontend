import styled from 'styled-components';

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: tomato;
`;

export const Button = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  color: black;
  background-color: #fff;
  outline: 1px solid blue;
`;

export const TooltipContainer = styled.div`
  position: absolute;
  width: 135px;
  min-height: 200px;
  background-color: gray;
  outline: 1px solid yellow;
  scale: 0;

  &.opened {
    scale: 1;
  }
`;

export const OptionList = styled.ul``;
