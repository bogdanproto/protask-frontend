import styled from 'styled-components';

export const SupportBox = styled.div`
  margin-inline: 14px;
  margin-top: auto;
  margin-bottom: 24px;
  background-color: ${p => p.theme.colors.sidebarSupport};
  border-radius: 8px;
  padding: 20px;

  @media (min-width: 768px) {
    margin-inline: 24px;
  }

  p {
    padding-block: 15px;
    color: ${p => p.theme.colors.logoutText};
    line-height: 1.3;
    letter-spacing: -0.02em;
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    span {
      color: ${p => p.theme.colors.btnPrimary};
    }
  }
`;

export const HelpButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${p => p.theme.colors.logoutText};
    font-size: 12px;

    svg {
      stroke: ${p => p.theme.colors.logoutText};
      fill: transparent;
    }
`;