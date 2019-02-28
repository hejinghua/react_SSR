import axios from "axios";
import {CHANGE_LIST} from './contants'
const changeList = (list) => ({
  type: CHANGE_LIST,
  list: list
})
export const getHomeList = (server) => {
  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
  let url = '';
  if (server) {
    url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE';
  }else {
    url = '/api/news.json?secret=PP87ANTIPIRATE'
  }
  return (dispatch) => {
    return axios.get(url)
        .then((res) => {
          const list = res.data.data;
          dispatch(changeList(list));
        })
  }
}