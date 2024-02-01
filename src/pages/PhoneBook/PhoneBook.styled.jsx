import styled from 'styled-components';
import { MdAddCircle } from 'react-icons/md';
export const PhoneBookStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: rgba(51, 51, 51, 1);
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 28px;
  right: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const PhoneBookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 18px;
  }
`;

export const AddIconStyled = styled(MdAddCircle)`
  width: 48px;
  height: 48px;
  color: rgba(14, 100, 210, 0.9);
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, color 0.3s;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s;
  }

  &:hover {
    color: rgba(14, 100, 210, 1);
  }
`;
