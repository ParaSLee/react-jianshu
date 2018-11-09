import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
// 全局样式
import GlobalStyle from './style'
import Iconfont from './statics/iconfont/iconfont'

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import LogIn from './pages/logIn';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' component={Detail}></Route>
              {/* <Route path='/detail' component={Detail}></Route> */}
              <Route path='/login' component={LogIn}></Route>
              <Route path='/write' component={Write}></Route>
            </Fragment>
          </BrowserRouter>
        </Provider>
        <GlobalStyle/>
        <Iconfont/>
      </Fragment>
    );
  }
}

export default App;
