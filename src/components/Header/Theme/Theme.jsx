import React, { useContext } from 'react';
import Select from 'react-select';
import { customStyles, options } from '../index.js';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from 'styled-components';
import { updUserTheme } from 'redux/authSlice/operations/index.js';
import { selectWithAdaptSelector } from 'redux/authSlice/selectors/selectorAuth.js';

export const HeaderThemeSelect = () => {
  const theme = useContext(ThemeContext);
  const color = useSelector(selectWithAdaptSelector);
  const dispatch = useDispatch();

  const handleSelect = color => {
    dispatch(updUserTheme({ theme: color.value }));
  };

  return (
    <div className="header-theme-select">
      <Select
        defaultValue={color}
        onChange={handleSelect}
        options={options}
        placeholder={color}
        styles={customStyles(theme)} // Передаємо власні стилі
      />
    </div>
  );
};
