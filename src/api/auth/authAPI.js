import { taskAPI } from 'api/axiosConfig/axiosConfig';
import { pathAuth } from 'const';

export const signUpAPI = async obj => {
  const { data } = await taskAPI.post(pathAuth.SIGNUP, obj);
  return data;
};

export const logInAPI = async obj => {
  const { data } = await taskAPI.post(pathAuth.LOGIN, obj);
  return data;
};

export const logOutAPI = async () => {
  await taskAPI.post(pathAuth.LOGOUT);
};

export const refreshUserAPI = async () => {
  const { data } = await taskAPI.get(pathAuth.CURRENT);
  return data;
};

export const setAuthToken = token => {
  taskAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  taskAPI.defaults.headers.common.Authorization = null;
};

// =============PROFILE==============================
export const updateUserAvatarAPI = async file => {
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append('avatar', file);

  const { data } = await taskAPI.patch(pathAuth.AVATAR, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const updateUserProfileAPI = async obj => {
  const { data } = await taskAPI.patch(pathAuth.PROFILE, obj);
  return data;
};

export const updateUserThemeAPI = async obj => {
  const { data } = await taskAPI.patch(pathAuth.THEME, obj);
  return data;
};
