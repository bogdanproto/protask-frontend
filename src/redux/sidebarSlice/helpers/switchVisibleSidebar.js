export const switchVisibleSidebar = (data) => {
  return {
    type: 'sidebar',
    isOpen: data,
  };
};
