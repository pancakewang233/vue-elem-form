import request from "../request";

const api = {
  user: (params) =>
    request({
      url: "api/user",
      method: "get",
      params,
    }),
};

export default api;
