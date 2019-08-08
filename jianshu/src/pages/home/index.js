import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper } from './style';
import { HomeLeft } from './style';
import { HomeRight } from './style';
import Topic from './components/Topic';
import List from  './components/List';
import Recomment from  './components/Recomments';
import Writer from './components/Writer';
// import axios from 'axios';
import { actionCreators } from './store';

class Home extends Component {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = "banner-img" src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recomment />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
    // 当页面挂载完毕,去请求数据
    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {  // 去掉圆括号里面的action
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});

export default connect(null, mapDispatch)(Home);