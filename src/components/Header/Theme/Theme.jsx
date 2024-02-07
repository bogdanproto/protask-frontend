import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import { customStyles, options} from '../index.js';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from 'styled-components';
import { updUserTheme } from 'redux/authSlice/operations/index.js';

export const HeaderThemeSelect = () => {
  const theme = useContext(ThemeContext);
  const color = useSelector(state => state.authUser.user.theme);

  const [selectedOption, setSelectedOption] = useState(color);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updUserTheme(selectedOption));
  }, [dispatch,selectedOption]);

  return (
    <div className="header-theme-select">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={selectedOption}
        styles={customStyles(theme)} // Передаємо власні стилі
      />
    </div>
  );
};
