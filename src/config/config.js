import axios from "axios";

export const ApiUrl = "https://pokeapi.co/api/v2";

export const instance = axios.create({
  baseURL: ApiUrl,
});

export const cancelToken = axios.CancelToken;

export function initInterceptors(dispatch) {
  instance.interceptors.request.use(
    function (config) {
      // const token = getToken(AUTH_TOKEN);
      // if (token) {
      //   config.headers['Authorization'] = 'Bearer ' + token;
      // };
      // console.log(config);
      return config;
    },
    function (error) {
      // console.log(error.response);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}

export default instance;
