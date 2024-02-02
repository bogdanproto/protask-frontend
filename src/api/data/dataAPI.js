import { taskAPI } from 'api/axiosConfig/axiosConfig';
import { pathData } from 'const';

export const sendToHelpDeskAPI = async obj => {
  const { data } = await taskAPI.post(pathData.HELP_DESK, obj);
  return data;
};
