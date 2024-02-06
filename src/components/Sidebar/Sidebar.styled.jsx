import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoSvgStyled } from 'components/common/LogoSvg/LogoSvg.styled';

export const SidebarStyled = styled.div`
  width: 100%;
  max-width: 225px;
  padding-block: 14px;
  background-color: ${p => p.theme.colors.accentColorHover};

    @media (min-width: 768px) {
      max-width: 260px;
      padding-block: 24px;
    }
`;

export const LogoLink = styled(Link)`
  color: ${p => p.theme.colors.logoutText};
  display: flex;
  align-items: center;
  gap: 8px;
  padding-inline: 14px;

  @media (min-width: 768px) {
    padding-inline: 24px;
  }

  ${LogoSvgStyled} {
    width: 32px;
    height: 32px;
    fill: ${p => p.theme.colors.white};
  }
`;

export const LogoText = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: 16px;
`;