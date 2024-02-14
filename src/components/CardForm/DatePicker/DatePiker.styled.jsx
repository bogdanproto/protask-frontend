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
  min-width: 127px !important;
  min-height: 43px !important;
  padding: 0 !important;

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
  left: 80px;
`;

export const TitleStyled = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: ${p => p.theme.colors.mainFontColor};
`;
