import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

import 'react-toastify/dist/ReactToastify.css';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 350px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;

  margin-bottom: 14px;
`;

export const TitleInput = styled(Field)`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  border: 1px solid;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: all 250ms ease;

  &::placeholder {
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  padding-right: 74px;
  gap: 4px;
`;

export const IconWrapper = styled.div``;

export const Icon = styled.svg`
  cursor: pointer;
  fill: transparent;
  transition: all 250ms linear;

  &.active {
    transform: scale(1.3) rotate(360deg); // Исправил опечатку "scale" вместо "transform: scale"
  }
`;

export const DefaultRadioBtn = styled(Field)`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CustomRadioBtn = styled(Field)`
  border-radius: 8px;
  width: 28px;
  height: 28px;

  background-position: center;
  background-size: cover;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const BgcItem = styled.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: contain;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  margin-right: 8px;
  padding: 7px;
`;

export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const ModalForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Close = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
