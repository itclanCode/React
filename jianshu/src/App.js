import React, { Fragment, Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';         // 引入store

import { GlobalStyle } from './style';
import { GlobalIcon } from './static/iconfont/iconfont';

class App extends Component {
      
      render() {
         return (
             <Fragment>
                  <GlobalStyle />
                  <GlobalIcon />
                  < Provider store = { store }>
                      <div>
                          <Header />
                          <BrowserRouter>
                              <Switch>
                                  {/*<Route path = '/' exact  render = {() => <div>home</div>}></Route>*/}
                                  {/*<Route path = '/itclan' exact render = {() => <div>itclan</div>}></Route>*/}

                                  <Route path = '/' exact  component={ Home }></Route>
                                  <Route path = '/detail' exact component={ Detail }></Route>
                              </Switch>

                          </BrowserRouter>
                      </div>

                  </Provider>
             </Fragment>
         );
      }
}

export default App;
