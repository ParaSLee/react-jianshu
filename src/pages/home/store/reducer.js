import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  imgUrl: [],
  articlePage: 1,
  showScroll: false,
})

const pushHomeStata = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList,
    imgUrl: action.imgUrl
  })
}

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.articleList),
    articlePage: action.nextPage
  })
}


export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.PUSH_HOME_STATE:
      return pushHomeStata(state, action);
    case constants.ADD_HOME_LIST:
      return addHomeList(state, action);
    case constants.Change_SCROLL_TOP_SHOW:
      return state.set('showScroll', action.showScroll)
    default:
      return state
  }
}