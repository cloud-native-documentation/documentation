const API_URL = "http://127.0.0.1:8000";

const apiConfig = {
  url: {
    document: {
      list: () => `${API_URL}/document/list`,
      view: () => `${API_URL}/document/view`,
    },
  },
};

export default apiConfig;
