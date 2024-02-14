import styled from 'styled-components';

export const ButtonAuthStyled = styled.button`
  width: 100%;
  height: 49px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  background: #bedbb0;
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #161616;

  transition: all ${p => p.theme.cubicTransition};

  &:hover,
  &:focus {
    background: #9dc888;
  }
`;
