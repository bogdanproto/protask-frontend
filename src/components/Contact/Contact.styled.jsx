import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;
  padding-bottom: 10px;

  font-size: 14px;

  border-bottom: 1px solid rgba(51, 51, 51, 0.2);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ContactBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NameContact = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: rgba(51, 51, 51, 1);
`;

export const PhoneContact = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: rgba(51, 51, 51, 0.7);
`;

export const DeleteIconStyled = styled(TiDelete)`
  width: 20px;
  height: 20px;
  color: #ab0404;
  cursor: pointer;

  &:hover {
    color: #ff0404;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: lightgrey;
  overflow: hidden;
  svg {
    width: 32px;
    height: 32px;
  }
`;
