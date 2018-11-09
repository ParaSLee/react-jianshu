import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
  render() {
    if(this.props.loginState) {
      return (
        <div>写文章</div>
      )
    } else {
      return (<Redirect to="/login"/>)
    }

  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write);