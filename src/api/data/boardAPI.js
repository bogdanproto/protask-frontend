import { taskAPI } from 'api/axiosConfig/axiosConfig';
import { pathData } from 'const';

export const getAllBoardsAPI = async () => {
  const { data } = await taskAPI.get(pathData.BOARD_BASE);
  return data;
};

export const getBoardByIdAPI = async id => {
  const { data } = await taskAPI.get(`${pathData.BOARD_BASE}/${id}`);
  return data;
};

export const addBoardAPI = async obj => {
  const { data } = await taskAPI.post(pathData.BOARD_BASE, obj);
  return data;
};

export const updateBoardAPI = async obj => {
  const _id = obj._id;
  delete obj._id;
  const { data } = await taskAPI.put(`${pathData.BOARD_BASE}/${_id}`, obj);

  return data;
};

export const deleteBoardAPI = async id => {
  const { data } = await taskAPI.delete(`${pathData.BOARD_BASE}/${id}`);

  return data;
};
