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

    @media (min-width: 768px) {
        padding-inline: 24px;
    }
`;

export const CreateButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ffffff1a;
    border-bottom: 1px solid #ffffff1a;
    padding-block: 14px;
    color: ${p => p.theme.colors.logoutText};
    padding-inline: 14px;

    @media (min-width: 768px) {
        padding-inline: 24px;
    }

    span {
        max-width: 76px;
    }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-block: 40px;
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
        background-color: #ffffff40;
        border-right: 4px solid ${p => p.theme.colors.logoutText};
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
    }
  
`;