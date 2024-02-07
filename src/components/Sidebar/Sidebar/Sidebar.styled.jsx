import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoSvgStyled } from 'components/common/LogoSvg/LogoSvg.styled';

export const Backdrop = styled.div`
  width: 100%;
  max-width: 100%;
  background: rgba(21, 21, 21, 0.3);
  position: fixed;
  overflow: auto;
  height: 100vh;

  @media (min-width: 1440px) {
    width: fit-content;
    position: static;
    height: auto;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.accentColor}; 
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.colors.accentColorHover}; 
  }
`;

export const SidebarStyled = styled.aside`
  //height: 100vh;
  width: 100%;
  max-width: 225px;
  padding-block: 14px;
  background-color: ${p => p.theme.colors.accentColorHover};
  display: flex;
  flex-direction: column;

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

  div {
    width: 32px;
    height: 32px;
    background-color: ${p => p.theme.colors.btnSmall};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${p => p.theme.colors.btnPrimary};
    }
  }
  
`;

export const LogoText = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: 16px;
`;

export const LogOut = styled.div`
  padding-inline: 14px;

  @media (min-width: 768px) {
    padding-inline: 24px;
  }
`;