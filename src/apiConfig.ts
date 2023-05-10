const API_URL = 'http://127.0.0.1:8000'

const apiConfig = {
  url: {
    user: {
      login: () => `${API_URL}/user/login`,
      logout: () => `${API_URL}/user/logout`,
      register: () => `${API_URL}/user/register`,
    },
  }
}

export default apiConfig
