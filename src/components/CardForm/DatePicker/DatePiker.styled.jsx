import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DatePickerStyled = styled(DatePicker)`
  letter-spacing: -0.02em;
  color: #bedbb0;
  outline: none;
  border: none;
  background: inherit;
  line-height: 21px;
  font-size: 14px;
  padding: 0;
  &:focus {
    outline: none;
    border: none;
  }
`;
