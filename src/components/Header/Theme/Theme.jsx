import React, { useState } from 'react';
import Select from 'react-select';
import { customStyles, options, setColor } from '../index.js';
import { useDispatch, useSelector } from 'react-redux';

const HeaderThemeSelect = () => {
  const color = useSelector(state => state.theme.value);
  const [selectedOption, setSelectedOption] = useState(color);
  const dispatch = useDispatch();

  dispatch(setColor(selectedOption));

  return (
    <div className="header-theme-select">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={selectedOption}
        styles={customStyles} // Передаємо власні стилі
      />
    </div>
  );
};

export default HeaderThemeSelect;
