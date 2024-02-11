import styled from 'styled-components';
import { getButtonColor } from 'helpers/index';

export const AddButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  min-width: 334px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${getButtonColor};
  color: ${p => p.theme.colors.fontColor};
  font-size: 14px;
  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: ${p => p.theme.colors.secondBackgroundColor};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;

  &::first-letter {
    text-transform: capitalize;
  }

  color: ${p => p.theme.colors.fontColor};
`;
