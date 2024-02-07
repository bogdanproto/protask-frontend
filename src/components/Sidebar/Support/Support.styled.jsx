import styled from 'styled-components';

export const SupportBox = styled.div`
  margin-inline: 14px;
  margin-top: auto;
  margin-bottom: 24px;
  background-color: #ffffff40;
  border-radius: 8px;
  padding: 20px;

  @media (min-width: 768px) {
    margin-inline: 24px;
  }

  p {
    padding-block: 16px;
    color: white;
    line-height: 1.4;
    letter-spacing: -0.02em;

    span {
        color: ${p => p.theme.colors.btnPrimary};
    }
  }
`;

export const HelpButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;

    svg {
        stroke: ${p => p.theme.colors.logoutText};
        fill: transparent;
    }
`;