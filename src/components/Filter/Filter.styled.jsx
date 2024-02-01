import styled from 'styled-components';
import { RiFindReplaceLine } from 'react-icons/ri';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 40px;

  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 12px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: rgba(254, 254, 254, 1);

  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;

  input {
    height: 32px;
    border: none;
    flex: 1;
    padding: 0;
    outline: none;
  }
`;

export const FilterIcons = styled(RiFindReplaceLine)`
  width: 18px;
  height: 18px;
  color: #131313;
`;
