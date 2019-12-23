import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
});

const tmp = JSON.parse(localStorage.getItem('persist:gympoint'));
const { token } = JSON.parse(tmp.auth);
if (token) {
  if (token.length > 0) {
    api.interceptors.request.use(conf => {
      conf.headers.Authorization = `Bearer ${token}`;

      return conf;
    });
  }
}

export default api;
