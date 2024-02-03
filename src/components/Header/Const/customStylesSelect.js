export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#161616', // Колір фону для вибору
    minWidth: '68px', // Мінімальна ширина
    paddingLeft: '5px',
    height: '20px',
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
  // input: () => ({
  //   display: 'none', // приховуємо input-елемент
  // }),

  singleValue: (provided, state) => {
    const centerStyles = {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      color: '#fff', // Задайте колір шрифта тут
      lineHeight: '0.5',
            
    };

    return state.isDisabled
      ? { ...provided, ...centerStyles }
      : { ...provided, ...centerStyles };
  },
  valueContainer: provided => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }),

  input: provided => ({
    ...provided,
    textAlign: 'left', // Розміщення тексту зліва
    cursor: 'text', // Курсор для вводу тексту
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
