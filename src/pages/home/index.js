import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import { actionCreators } from "./store";

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4546/dd55f322074ccec0be40c927e0705ef137f848b2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <div className="split-line"></div>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ?
            <BackTop onClick={this.handleScrollTop}>^</BackTop> :
            null
        }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getHomeList();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',
      () => this.props.changeScrollTopShow(this.props.showScroll))
  }

  bindEvents() {
    window.addEventListener('scroll',
      () => this.props.changeScrollTopShow(this.props.showScroll))
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeList: () => {
      dispatch(actionCreators.getHomeList())
    },
    changeScrollTopShow(showScroll) {
      const toTop = document.documentElement.scrollTop;
      if (toTop > 400 && showScroll===false) {
        dispatch(actionCreators.changeScrollTopShow(true))
      } else if (toTop < 400 && showScroll === true) {
        dispatch(actionCreators.changeScrollTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);