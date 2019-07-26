import React, { Fragment, Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
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
                     <Header />
                  </Provider>
             </Fragment>
         );
      }
}

export default App;
