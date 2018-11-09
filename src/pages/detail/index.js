import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { actionCreators } from "./store";

import {
  DetailWrapper,
  Post,
  Title,
  Author,
  Content,
} from "./style";

class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.search)
    const {
      title,
      content
    } = this.props;
    return (
      <DetailWrapper>
        <Post>
          <Title>{title}</Title>
          <Author>作者信息区域</Author>
          <Content dangerouslySetInnerHTML={{__html:content}} />
        </Post>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
