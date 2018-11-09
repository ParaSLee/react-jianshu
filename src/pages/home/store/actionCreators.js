import axios from "axios";
import {fromJS} from 'immutable';
import * as constants from './constants'

export const pushHomeState = (data) => ({
  type: constants.PUSH_HOME_STATE,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  imgUrl: fromJS(data.imgUrl),
})

export const addHomeList = (data, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  articleList: fromJS(data),
  nextPage: fromJS(nextPage)
})

export const changeScrollTopShow = (data) => ({
  type: constants.Change_SCROLL_TOP_SHOW,
  showScroll: fromJS(data)
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const {data} = res;
      dispatch(pushHomeState(data.data))
    }).catch((err) => {
      console.log(`err:${err}`)
    })
  }
}

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/addHomeList.json?page=' + articlePage).then((res) => {
      const {data} = res;
      console.log(data)
      dispatch(addHomeList(data.data, articlePage+1))
    }).catch((err) => {
      console.log(`err:${err}`)
    })
  }
}