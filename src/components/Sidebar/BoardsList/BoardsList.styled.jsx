import styled from 'styled-components';

export const Boards = styled.div`
    padding: 60px 0 0 0;

    @media (min-width: 768px) {
        padding: 60px 0 0 0;
    }

    @media (min-width: 1440px) {
        padding: 60px 0 0 0;
    }
`;

export const Title = styled.h2`
    font-size: 12px;
    opacity: 0.5;
    font-weight: 400;
    color: ${p => p.theme.colors.logoutText};
    margin-bottom: 8px;
    padding-inline: 14px;
    letter-spacing: -0.02em;

    @media (min-width: 768px) {
        padding-inline: 24px;
    }
`;

export const CreateButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${p => p.theme.colors.sidebarBorder};
    border-bottom: 1px solid ${p => p.theme.colors.sidebarBorder};
    padding-block: 14px;
    color: ${p => p.theme.colors.logoutText};
    margin-inline: 14px;

    @media (min-width: 768px) {
        margin-inline: 24px;
    }

    span {
        max-width: 76px;
        font-weight: 500;
        letter-spacing: -0.02em;
    }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-block: 40px;
  max-height: 22vh;
  overflow: auto;

    @media (min-width: 1440px) {
        max-height: 32vh;
    }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.accentColor}; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.colors.accentColorHover}; 
  }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-block: 20px;
    padding-inline: 14px;
    opacity: 0.5;

    @media (min-width: 768px) {
        padding-inline: 24px;
    }

    &.active {
        opacity: 1;
        background-color: ${p => p.theme.colors.sidebarTabActive};
        //border-right: 4px solid ${p => p.theme.colors.sidebarBorder2};
    }

    svg {
        stroke: ${p => p.theme.colors.logoutText};
        fill: transparent;
    }

    h3 {
        color: ${p => p.theme.colors.logoutText};
        margin-bottom: 0;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.02em;
    }
  
`;