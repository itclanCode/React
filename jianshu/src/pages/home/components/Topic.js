import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
// 做连接
import { connect } from 'react-redux';

class Topic extends Component {

    render(){
        const { list } = this.props;

        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key = {item.get('id')}>
                                <img className="topic-pic" src={item.get('imgUrl')} />
                                { item.get('title')}
                            </TopicItem>
                        );
                    })
                }


            </TopicWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.get('home').get('topicList')
});

export default connect(mapState, null) (Topic);