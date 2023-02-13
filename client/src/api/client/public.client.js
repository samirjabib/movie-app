import axios from "axios";
import queryString from "query-string";
// http://localhost:9000/api/v1
const baseURL = "https://backed-movie-app.up.railway.app/"

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

publicClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
    return response;
  }, (err) => {
    throw err.response.data;
  });

export default publicClient;