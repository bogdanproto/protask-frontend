import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogInStyled = styled.div`
  padding-top: 128px;
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;
  color: rgba(0, 0, 0, 0.8);

  h1 {
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const LoginRegisterBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: rgba(47, 137, 252, 1);
`;
