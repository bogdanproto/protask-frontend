import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnLinkStyled = styled(NavLink)`
  min-width: 280px;
  width: calc(100vw - 40px);
  max-width: 335px;
  height: 49px;
  background: #161616;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;

  transition: all ${p => p.theme.cubicTransition};

&:hover {
  background-color: #9DC888;
  }

  @media (min-width: 375px)  {
    max-width: 344px;
    height: 49px;
  }
`;
