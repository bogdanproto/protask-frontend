import { TbLogout } from 'react-icons/tb';
import styled from 'styled-components';

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  p {
    font-size: 16px;
  }
`;

export const LogoutIconStyled = styled(TbLogout)`
  width: 18px;
  height: 18px;
  color: #131313;
  cursor: pointer;

  &:hover {
    color: rgba(14, 100, 210, 0.9);
  }
`;
