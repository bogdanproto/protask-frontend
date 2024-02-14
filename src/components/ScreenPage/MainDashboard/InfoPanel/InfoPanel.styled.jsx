import styled from 'styled-components';
import { getPriorityColor } from 'helpers/index';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 220px;
  height: 31px;
  padding-bottom: ${p => p.theme.spacing(2)};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: ${p => p.theme.spacing(7)};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 31px;
`;

export const InfoTitle = styled.h5`
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${p => p.theme.colors.mainFontColor};
  opacity: 0.5;
`;

export const InfoText = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${p => p.theme.colors.mainFontColor};
`;

export const PriorityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const PriorityIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${getPriorityColor};
`;

export const DeadlineSignal = styled.div`
  width: 16px;
  height: 16px;

  cursor: pointer;
  color: ${({ theme, $isPast }) =>
    $isPast ? '#dc3030' : theme.colors.mainAccentColor};
`;
