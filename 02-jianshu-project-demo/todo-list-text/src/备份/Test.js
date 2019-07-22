import React, { Component } from 'react';

class Text extends Component {

    render() {
        console.log('Test render');
        return <div>{ this.props.content }</div>
    }
}

export default Text;