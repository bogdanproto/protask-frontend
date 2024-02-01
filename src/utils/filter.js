export const toFilter = (array, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return array.filter(({ name, number }) => {
    const isName = name.toLowerCase().includes(normalizedFilter);
    const isNumber = normalizedFilter
      .split('')
      .every((letter, idx) => letter === number[idx]);
    return isNumber || isName;
  });
};
