import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/logIn/store";

import {
  HeaderWrapper,
  Logo,
  Img,
  Nav,
  WriteBtn,
  RegBtn,
  LogBtn,
  NavItem,
  NavSearch,
  SearchBox,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoTitleBox,
  SearchInfoSwitch,
  SearchInfoItem
} from "./style";

import logoImg from '../../statics/logo.png';


class Header extends Component{
  render() {
    const {
      list,
      focused,
      mouseIn,
      handleFocus,
      handleBlur,
      login,
      logout
    } = this.props;

    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo><Img srcSet={logoImg} alt="logo"/></Logo>
        </Link>
        <Link to='/write'><WriteBtn className="right">
          <i className="iconfont">&#xe61b;</i>
          写文章
        </WriteBtn></Link>
        {
          login ?
            null :
            <RegBtn className="right">注册</RegBtn>
        }
        { 
          login ?
            <LogBtn className="right" onClick={logout}>退出</LogBtn> :
            <Link to='/login'><LogBtn className="right">登录</LogBtn></Link>
        }
        <LogBtn className="right mode">
          <i className="iconfont">&#xe636;</i>
        </LogBtn>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchBox>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {handleFocus(list)}}
                onBlur={handleBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
            {
              (focused || mouseIn) ? this.getSearchInfo(): null
            }
          </SearchBox>
        </Nav>
      </HeaderWrapper>
    )
  }

  getSearchInfo() {
    const {
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;

    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for(let i = page * 10;i < (page + 1) * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }

    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitleBox>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoSwitch
            onClick={() => {handleChangePage(page, totalPage, this.searchI)}}
          >
            <i
              ref={(searchI) => {this.searchI = searchI}}
              className="iconfont searchI"
            >&#xe7d3;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitleBox>
        <div>
          { pageList }
        </div>
      </SearchInfo>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    mouseIn: state.get('header').get('mouseIn'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: (list) => {
      !list.size && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur: () => {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage: (page, totalPage, searchI) => {
      let originAngle = searchI.style.transform.replace(/\D/g,'')
      if (originAngle) {
        originAngle = +originAngle + 360
      } else {
        originAngle = 360;
      }
      searchI.style.transform = `rotate(${originAngle}deg)`
      page = page < totalPage-1 ? page + 1 : 0
      dispatch(actionCreators.changePage(page))
    },
    logout: () => {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);