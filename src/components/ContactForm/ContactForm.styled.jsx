import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  position: absolute;
  z-index: 3;
  bottom: -260px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 312px;
  padding: 20px;

  border-radius: 5px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 1);

  transition: transform 0.3s ease;

  transform: translateY(
    ${({ $isCreateMenuOpen }) => $isCreateMenuOpen && '-280px'}
  );

  input {
    width: 100%;
    height: 36px;
    padding: 8px;

    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;

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
`;

export const Label = styled.label`
  display: block;

  font-size: 12px;
  font-weight: bold;

  p {
    color: red;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  font-size: 12px;
  font-weight: bold;
`;
