import axios from 'utils/myAxios';

export function phoneLogin(phone, password) {
  return axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
}

export function emailLogin(email, password) {
  return axios.get(`/login?email=${email}@163.com&password=${password}`);
}
