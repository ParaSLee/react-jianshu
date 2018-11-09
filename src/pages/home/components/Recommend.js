import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem
} from "../style";

class Recommend extends PureComponent {
  render() {
    const {imgUrl} = this.props;
    return (
      <RecommendWrapper>
        {
          imgUrl.map((item) => {
            return (
              <RecommendItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    imgUrl: state.getIn(['home','imgUrl'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recommend)