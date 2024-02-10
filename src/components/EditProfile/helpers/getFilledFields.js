export const getFilledFields = (enterValue) =>Object.entries(enterValue)
  .filter(([key, value]) => value !== '') 
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
