import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://dummyapi.online/api",
  timeout: 10000,
});

httpClient.interceptors.request.use((req) => {
  console.clear();
  console.log(req);
  console.log("Http Request Api :", req.baseURL);
  return req;
});

httpClient.interceptors.response.use((res) => {
  console.log(res);
  console.log(res.status);
  return res;
});
export default httpClient;
