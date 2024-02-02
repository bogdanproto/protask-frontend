import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    //   border: '1px solid #ccc',
    border: 'none',
    borderRadius: '5px',
    // boxShadow: state.isFocused ? '0 0 0 1px #434f5f' : null,
    backgroundColor: '#161616', // Колір фону для вибору
    minWidth: '100px', // Мінімальна ширина
    paddingLeft: '5px',
    height:"20px",
    justifyContent: 'center',
    alignItems: 'center',
  }),
  fontFamily: 'Arial, sans-serif', // Додавання стилю шрифта
  fontSize: '16px', // Розмір шрифта
  placeholder: provided => ({
    ...provided,
    color: '#fff', // Колір placeholder
  }),
  indicatorSeparator: () => ({
    display: 'none', // Приховуємо горизонтальну лінію
  }),

  singleValue: (provided, state) => {
    const centerStyles = {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      color: '#fff', // Задайте колір шрифта тут
    };

    return state.isDisabled ? { ...provided, ...centerStyles } : { ...provided, ...centerStyles };
  },
  valueContainer: provided => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }),
 
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#09fc45' : '#ffffff', // Колір шрифта для опцій
    backgroundColor: state.isSelected ? '#161616' : '#161616', // Колір фону для вибраних опцій
    '&:hover': {
      backgroundColor: '#161616', // Колір фону при наведенні на опцію
      color: '#3c99f0', // Колір шрифта при наведенні на опцію
    },
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: '#161616', // Колір фону для випадаючого меню
    borderRadius: '5px', // Радіус вспливаючого меню
    padding: '5px',
  }),
  // інші стилі
};

const HeaderThemeSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="header-theme-select">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Theme"
        styles={customStyles} // Передаємо власні стилі
      />
    </div>
  );
};

export default HeaderThemeSelect;
