import axios from 'axios';
import { pathBase } from 'const';

export const taskAPI = axios.create({
  baseURL: pathBase.BASEURL,
});
