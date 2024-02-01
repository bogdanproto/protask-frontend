import axios from 'axios';

const herokuApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthToken = token => {
  herokuApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteAuthToken = () => {
  herokuApi.defaults.headers.common.Authorization = null;
};

export { herokuApi, setAuthToken, deleteAuthToken };
