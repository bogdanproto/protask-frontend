import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const DatePickerStyled = styled(DatePicker)`
  letter-spacing: -0.02em;
  color: #bedbb0;
  outline: none;
  border: none;
  background: inherit;
  line-height: 21px;
  font-size: 14px;
  width: 127px;
  height: 43px;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const IconStyled = styled(RiArrowDropDownLine)`
  fill: #bedbb0;
  width: 18px;
  height: 18px;
  padding: 0 !important;
`;

export const h1Styled = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
