import styled from 'styled-components';
// import { LogoSvgStyled } from 'components/common/LogoSvg/LogoSvg.styled';

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
  align-items: start;
  height: 100vh;
  width: 225px;
  max-width: 225px;

  padding-bottom: ${p => p.theme.spacing(12)};
  background-color: ${p => p.theme.colors.sidebarBackgroundColor};
  display: flex;
  flex-direction: column;
  transform: translateX(${p => (p.$isvisible === 'true' ? '0' : '-100%')});
  transition: transform ${p => p.theme.cubicTransition};

  @media (min-width: 768px) {
    min-width: 260px;
  }
`;

export const Top = styled.div`
  width: 100%;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 8px;
  min-height: 60px;
  margin-left: ${p => p.theme.spacing(7)};

  @media (min-width: 768px) {
    maargin-left: ${p => p.theme.spacing(12)};
    min-height: 68px;
  }
`;

export const LogoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radius};

  color: ${p => p.theme.colors.logoFillColor};
  background-color: ${p => p.theme.colors.logoBackgroundColor};
`;

export const LogoText = styled.span`
  color: ${p => p.theme.colors.secondFontColor};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.04em;
`;

export const LogOut = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  margin-top: 20px;
  padding: 4px;
  margin-left: ${p => p.theme.spacing(7)};
  color: ${p => p.theme.colors.secondFontColor};

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.secondAccentColor};
  }
  @media (min-width: 768px) {
    margin-left: ${p => p.theme.spacing(12)};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.thirdAccentColor};
`;

export const ButtonTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
`;
