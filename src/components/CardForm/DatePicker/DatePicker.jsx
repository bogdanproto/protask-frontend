import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateFormat from 'dateformat';
import { DatePickerStyled } from './DatePiker.styled';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const customDateFormat = date => {
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return `Today, ${'MMMM  d'}`;
    } else {
      return `${'MMMM  d'}`;
    }
  };

  return (
    <DatePickerStyled
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      minDate={new Date()}
      dateFormat="MMMM  d"
    />
  );
};

export default CustomDatePicker;
