import { taskAPI } from 'api/axiosConfig/axiosConfig';
import { pathData } from 'const';

export const getAllCardsAPI = async obj => {
  const { data } = await taskAPI.get(pathData.CARD_BASE, obj);
  return data;
};

export const getCardByIdAPI = async id => {
  const { data } = await taskAPI.get(`${pathData.CARD_BASE}/${id}`);
  return data;
};

export const addCardAPI = async obj => {
  const { data } = await taskAPI.post(pathData.CARD_BASE, obj);
  return data;
};

export const updateCardAPI = async obj => {
  const _id = obj._id;
  delete obj._id;
  const { data } = await taskAPI.put(`${pathData.CARD_BASE}/${_id}`, obj);

  return data;
};

export const changeCardsColumnAPI = async obj => {
  const _id = obj._id;
  delete obj._id;
  const { data } = await taskAPI.patch(
    `${pathData.CARD_BASE}/${_id}${pathData.CARD_CHANGE_COLUMN}`,
    obj
  );

  return data;
};

export const deleteCardAPI = async id => {
  const { data } = await taskAPI.delete(`${pathData.CARD_BASE}/${id}`);

  return data;
};