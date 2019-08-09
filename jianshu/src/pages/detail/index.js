import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {

    render() {
        return (
            <DetailWrapper>
            	<Header>{ this.props.title }</Header>
            	<Content dangerousSetInnerHTML = {{__html: this.props.content}}></Content>
            </DetailWrapper>
        );
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

export default connect(mapState, null)(Detail);