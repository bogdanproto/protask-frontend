export const selectContacts = state => state.contacts.items;
export const selectLoader = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
