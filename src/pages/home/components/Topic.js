import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends PureComponent {
  render() {
    const {
      topicList
    } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
                <span>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
        <div className='topicMore'>更多热门专题 ></div>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)