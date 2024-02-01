import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  input {
    width: 312px;
    height: 48px;
    padding: 8px;

    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }

  button {
    width: 312px;
    height: 48px;

    padding: 10px 20px;
    margin-top: 16px;
    margin-bottom: 16px;

    cursor: pointer;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: rgba(14, 100, 210, 0.9);
    color: rgba(255, 255, 255, 0.9);

    transition: background-color 0.3s, color 0.3s;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: rgba(14, 100, 210, 1);
    }

    &:active {
      background-color: rgba(14, 100, 210, 1);
      transform: scale(0.98);
      transition: transform 0.1s;
    }
  }
  p {
    position: absolute;
    display: block;
    padding: 8px;

    font-size: 12px;
    color: red;
  }
`;
