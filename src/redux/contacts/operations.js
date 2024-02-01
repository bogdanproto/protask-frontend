import { createAsyncThunk } from '@reduxjs/toolkit';
import { herokuApi } from 'utils/apiSetting';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (signal, thunkAPI) => {
    try {
      const { data } = await herokuApi.get('contacts', { signal });
      return data;
    } catch (error) {
      if (error.code === 'ERR_CANCELED') {
        return thunkAPI.rejectWithValue(null);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (obj, thunkAPI) => {
    try {
      const { data } = await herokuApi.post('contacts', obj);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await herokuApi.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
