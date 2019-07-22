/*import React from 'react';
function App() {
    return (
        <div>
            Learn React
        </div>
    );
}*/
import React, { Component } from 'react';
/*
* import { Component } from 'react';
* 等价于
* import React from 'react';
* const Component = React.Component
* */
class App extends Component {
   render () {
     return (
         <div>learn React</div>
     )
   }
}



export default App;
