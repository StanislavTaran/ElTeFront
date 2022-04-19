import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

request.defaults.withCredentials = false;
request.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

request.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line consistent-return
  async (error) => {
    if (error.response) {
      return error.response;
    }
    return error;
  }
);

export default request;
