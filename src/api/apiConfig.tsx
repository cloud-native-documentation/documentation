const API_URL = "http://127.0.0.1:8000";

const apiConfig = {
  url: {
    document: {
      list: () => `${API_URL}/document/list`,
      view: () => `${API_URL}/document/view`,
      version: () => `${API_URL}/document/version`,
      historyActions: () => `${API_URL}/document/show_history`,
    },
  },
};

export default apiConfig;
