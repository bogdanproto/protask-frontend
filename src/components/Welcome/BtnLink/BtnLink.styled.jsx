import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnLinkStyled = styled(NavLink)`
  width: 335px;
  height: 49px;
  background: ${props => props.theme.colors.black};
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

  color: ${props => props.theme.colors.white};

  @media (min-width: 375px)  {
    width: 344px;
    height: 49px;
  }
`;
