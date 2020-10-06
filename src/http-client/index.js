import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://10.52.221.123:8080/ui',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {},
  timeout: 15000
  /**
    `adapter` allows custom handling of requests which makes testing easier.
    Return a promise and supply a valid response (see lib/adapters/README.md).
   */
  /*
  adapter: config => {
    console.log(`### adapter: ${JSON.stringify(config)}`);
  }
  */
  /**
    `transformRequest` allows changes to the request data before it is sent to the server
    This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    FormData or Stream
    You may modify the headers object.
   */
  /*
  transformRequest: [
    function (data, headers) {
      console.log("### transformRequest");
      store.dispatch(spinner({ show: true }));
      console.log(data);
      return data;
    }
  ]
  */
  /**
    `transformResponse` allows changes to the response data to be made before
    it is passed to then/catch
  */
  /*
  transformResponse: [
    function (data) {
      return JSON.parse(data);
    }
  ]
  */
})

httpClient.interceptors.request.use(
  function (config) {
    config.started = new Date().getTime()
    return config
  },
  function (error) {
    console.log(`### errer request: ${error}`)
    return Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  function (config) {
    const took = new Date().getTime() - config.config.started
    console.log(`### [${config.config.url}] took ${took}ms`)
    return config
  },
  function (error) {
    console.log(`### errer response: ${error}`)
    return Promise.reject(error)
  }
)

export default httpClient
