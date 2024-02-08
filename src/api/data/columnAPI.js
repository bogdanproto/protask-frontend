import { taskAPI } from 'api/axiosConfig/axiosConfig';
import { pathData } from 'const';

export const getAllColumnsAPI = async obj => {
  const { data } = await taskAPI.get(pathData.COLUMN_BASE, obj);
  return data;
};

export const getColumnByIdAPI = async id => {
  const { data } = await taskAPI.get(`${pathData.COLUMN_BASE}/${id}`);
  return data;
};

export const addColumnAPI = async obj => {
  const { data } = await taskAPI.post(pathData.COLUMN_BASE, obj);
  return data;
};

export const updateColumnAPI = async obj => {
  const _id = obj._id;
  delete obj._id;
  const { data } = await taskAPI.put(`${pathData.COLUMN_BASE}/${_id}`, obj);

  return data;
};

export const deleteColumnAPI = async id => {
  const { data } = await taskAPI.delete(`${pathData.COLUMN_BASE}/${id}`);

  return data;
};
