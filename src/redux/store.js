import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { userReducer } from './userAuth/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    userAuth: persistReducer(authPersistConfig, userReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
