import styled from 'styled-components';
import { getPriorityColor } from 'helpers/index';

export const CardContainer = styled.div`
  background-color: ${p => p.theme.colors.secondBackgroundColor};
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(7)}
    ${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};

  width: 334px;
  border-radius: ${p => p.theme.radius};
  overflow: hidden;

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
  position: relative;
  min-height: 80px;
  padding-right: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(7)};
  cursor: zoom-in;

  overflow: hidden;

  &::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: 0;

    width: calc(100% - 6px);
    height: 1px;

    background-color: ${p => p.theme.colors.sidebarBorder};
  }

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
  color: ${p => p.theme.colors.fontColor};

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
  color: ${p => p.theme.colors.fontColor};
  opacity: 0.7;

  &.expanded {
    overflow: show;
    text-overflow: '';
    -webkit-line-clamp: 50;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(4)};
  align-items: center;
  height: 45px;
  padding-top: ${p => p.theme.spacing(7)};
`;
