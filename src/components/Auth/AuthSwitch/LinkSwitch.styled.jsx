import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkSwitchStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: -0.02em;

  color: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.3)'};
`;
