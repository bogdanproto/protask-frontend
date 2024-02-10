export const customStyles = theme => ({
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'transparent', // Колір фону для вибору
    minWidth: '68px', // Мінімальна ширина
    justifyContent: 'center',
    alignItems: 'center',
  }),
  placeholder: provided => ({
    ...provided,
    color: theme.colors.inputColor, // Колір placeholder
  }),
  indicatorSeparator: () => ({
    display: 'none', // Приховуємо горизонтальну лінію
  }),

  singleValue: (provided, state) => {
    const centerStyles = {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      color: theme.colors.inputColor,
    };

    return state.isDisabled
      ? { ...provided, ...centerStyles }
      : { ...provided, ...centerStyles };
  },
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected
      ? theme.colors.accentColor
      : theme.colors.inputColor, // Колір шрифта для опцій
    backgroundColor: 'transparent', // Колір фону для вибраних опцій
    '&:hover': {
      border: 'none',
      color: theme.colors.accentColorHover, // Колір шрифта при наведенні на опцію
    },
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: theme.colors.background, // Колір фону для випадаючого меню
    borderRadius: '5px', // Радіус вспливаючого меню
    padding: '5px',
  }),
});
