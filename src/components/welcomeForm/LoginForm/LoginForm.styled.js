import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;

  :placeholder {
    color: #757575;
  }

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 1px solid #000000;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  margin-top: 24px;
  padding: 1.063em 1.5em;

  background-color: #648656;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 14px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
    border: 1px solid #000000;
  }
`;

export const LoggedLink = styled(NavLink)`
  margin-top: 8px;
  color: #8f8f8f;

  cursor: pointer;

  :hover,
  :focus {
    color: #fabb18;
  }
`;