import { constants } from "./index";
import axios from 'axios'
import { fromJS } from "immutable";

export const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title: fromJS(title),
  content: fromJS(content)
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) => {
      const data = res.data.data;
      dispatch(changeDetail(data.title, data.content))
    }).catch((err) => {
      console.log(`err:${err}`)
    })
  }
}