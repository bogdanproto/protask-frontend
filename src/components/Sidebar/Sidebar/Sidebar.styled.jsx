import styled from 'styled-components';
import { LogoSvgStyled } from 'components/common/LogoSvg/LogoSvg.styled';

export const Backdrop = styled.div`
  width: 100%;
  max-width: 100%;
  background: rgba(21, 21, 21, 0.3);
  position: fixed;
  overflow: hidden;
  height: 100vh;
  z-index: 2;
  opacity: ${p => (p.$isvisible === 'true' ? '1' : '0')};
  visibility: ${p => (p.$isvisible === 'true' ? 'visible' : 'hidden')};
  transition: opacity ${p => p.theme.cubicTransition};

  //transform: translateX(${p => (p.isvisible === 'true' ? '0' : '-100%')});
  //transition: transform ${p => p.theme.cubicTransition};

  @media (min-width: 1440px) {
    width: fit-content;
    position: static;
    height: auto;
    transform: translateX(0);
  }
`;

export const SidebarStyled = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 225px;
  max-width: 225px;
  padding: ${p => p.theme.spacing(7)};
  padding-bottom: ${p => p.theme.spacing(12)};
  background-color: ${p => p.theme.colors.sidebarBackgroundColor};
  display: flex;
  flex-direction: column;
  transform: translateX(${p => (p.$isvisible === 'true' ? '0' : '-100%')});
  transition: transform ${p => p.theme.cubicTransition};

  @media (min-width: 768px) {
    min-width: 260px;
    padding: ${p => p.theme.spacing(12)};
  }
`;

export const LogoLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
  }

  div {
    width: 32px;
    height: 32px;
    background-color: ${p => p.theme.colors.logoBackgroundColor};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${p => p.theme.colors.logoFillColor};
    }
  }
`;

export const LogoText = styled.span`
  color: ${p => p.theme.colors.secondFontColor};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.04em;
`;

export const LogOut = styled.div`
  margin-top: 20px;
  padding: 4px;
  button {
    color: ${p => p.theme.colors.secondFontColor};
  }
  /* color: ${p => p.theme.colors.secondFontColor}; */

  @media (min-width: 768px) {
    /* color: ${p => p.theme.colors.secondFontColor}; */
  }
`;
