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
  z-index: 2;
  opacity: ${p => p.$isvisible === "true" ? "1" : "0"};
  visibility: ${p => p.$isvisible === "true" ? "visible" : "hidden"};
  transition: opacity ${p => p.theme.cubicTransition};

  //transform: translateX(${p => p.isvisible === "true"? "0" : "-100%"});
  //transition: transform ${p => p.theme.cubicTransition};

  @media (min-width: 1440px) {
    width: fit-content;
    position: static;
    height: auto;
    transform: translateX(0);
  }

  &::-webkit-scrollbar {
    width: 5px;
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

export const SidebarStyled = styled.aside`
  height: 100vh;
  width: 100%;
  max-width: 225px;
  padding-block: 14px;
  background-color: ${p => p.theme.colors.sidebarBackground};
  display: flex;
  flex-direction: column;
  transform: translateX(${p => p.$isvisible === "true"? "0" : "-100%"});
  transition: transform ${p => p.theme.cubicTransition};

  @media (min-width: 768px) {
    max-width: 260px;
    padding-block: 24px;
  }
`;

export const LogoLink = styled(Link)`
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
    background-color: ${p => p.theme.colors.logoBackground};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${p => p.theme.colors.logoIcon};
    }
  }
  
`;

export const LogoText = styled.span`
    color: ${p => p.theme.colors.logoutText};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.04em;
`;

export const LogOut = styled.div`
  padding-inline: 14px;

  @media (min-width: 768px) {
    padding-inline: 24px;
  }
`;