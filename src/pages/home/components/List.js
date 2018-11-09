import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { actionCreators } from "../store";

import {
  ListItem,
  ListInfo,
  ListMeta,
  LoadMore
} from '../style'

class List extends PureComponent {
  render() {
    const {
      articleList,
      getMoreList,
      articlePage
    } = this.props;
    return (
      <Fragment>
        {
          articleList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <Link to={'/detail/' + item.get('id')}>
                  {/* <Link to={'/detail?id=' + item.get('id')}> */}
                    <h3>{item.get('title')}</h3>
                  </Link>
                  <p>{item.get('desc')}</p>
                  <ListMeta></ListMeta>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => {getMoreList(articlePage)}}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(articlePage) {
      dispatch(actionCreators.getMoreList(articlePage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)