import { taskAPI } from 'api/axiosConfig/axiosConfig';
import { pathUiData } from 'const';

export const getAllWallpapersAPI = async () => {
  const { data } = await taskAPI.get(pathUiData.WALLPAPERS);
  return data;
};
