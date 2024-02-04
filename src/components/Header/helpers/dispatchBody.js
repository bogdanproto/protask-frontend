export const setColor = selectedOption => {
  return { type: 'color', user: { theme: selectedOption.value } };
};
