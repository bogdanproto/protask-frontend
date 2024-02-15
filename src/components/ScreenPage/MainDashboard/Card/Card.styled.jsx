import styled from 'styled-components';
import { getPriorityColor } from 'helpers/index';

export const CardContainer = styled.div`
  background-color: ${p => p.theme.colors.cardBackgroundColor};
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(7)}
    ${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};

  min-width: 280px;
  width: calc(100vw - 40px);
  max-width: 335px;
  min-height: 154px;
  border-radius: ${p => p.theme.radius};
  overflow-x: hidden;

  &::before {
    content: '';

    position: absolute;
    left: 0;
    top: 0;

    width: 4px;
    height: 100%;

    background-color: ${getPriorityColor};
  }
`;

export const TopBox = styled.div`
  min-height: 81px;
  margin-right: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(7)};
  border-bottom: 1px solid ${p => p.theme.colors.cardLineColor};
  cursor: zoom-in;

  &.expanded {
    height: 100%;
    cursor: zoom-out;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: ${p => p.theme.spacing(4)};
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${p => p.theme.colors.mainFontColor};

  &.expanded {
    white-space: wrap;
    overflow: auto;
    text-overflow: '';
  }
`;

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.02em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${p => p.theme.colors.thirdFontColor};

  &.expanded {
    overflow: show;
    text-overflow: '';
    -webkit-line-clamp: 50;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding-top: ${p => p.theme.spacing(7)};
`;
