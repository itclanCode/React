import React, { Fragment, Component } from 'react';
import Header from './common/header';

import { GlobalStyle } from './style';
import { GlobalIcon } from './static/iconfont/iconfont';

class App extends Component {
      
      render() {
         return (
             <Fragment>
                  <GlobalStyle />
                  <GlobalIcon />
                  <Header />
             </Fragment>
         );
      }
}

export default App;
