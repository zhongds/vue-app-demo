import axios from 'utils/myAxios';

export function getUserPlayList(uid) {
  return axios.get(`/user/playlist?uid=${uid}`);
}
