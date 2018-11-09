import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from "./store";

import {
  LoginWrapper,
  LoginMain,
  Title,
  Input,
  Button
} from "./style";

class LogIn extends PureComponent {
  render() {
    const FancyButton = React.forwardRef((props, ref) => (
      <LoginMain ref={ref}>
        <Title>登录</Title>
        <Input placeholder='账号'></Input>
        <Input placeholder='密码' type="password"></Input>
        <Button
          className="FancyButton"
          onClick={()=>{this.props.login(ref)}}
        >
          登录
        </Button>
      </LoginMain>
    ));

    const ref = React.createRef();
    
    if(!this.props.loginState) {
      return (
        <LoginWrapper>
          <FancyButton ref={ref}></FancyButton>
        </LoginWrapper>
      )
    } else {
      return (<Redirect to="/"/>)
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
    login(ref) {
      const children = ref.current.children;
      dispatch(actionCreators.login(children[1].value,children[2].value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);