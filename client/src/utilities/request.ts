import axios from "axios";

// wip, will replace with env
export const restPath = "http://localhost:3230/api";

export const request = (method: string, path: string, data = {}) => {
  const options = {
    method,
    data,
    url: restPath + path,
    timeout: 50000,
  };
  return axios(options);
};
