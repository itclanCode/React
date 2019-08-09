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
import { BackTop } from './style';

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0, 0);
    }

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
                { this.props.showScroll ? <BackTop onClick = { this.handleScrollTop }>回到顶部</BackTop>: null}
                
            </HomeWrapper>
        );
    }
    // 当页面挂载完毕,去请求数据
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    // 他会在组件即将被销毁的时候进行
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {  // 去掉圆括号里面的action
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        console.log(document.documentElement.scrollTop);
        const scrollTop = document.documentElement.scrollTop;
        if(scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }

});

export default connect(mapState, mapDispatch)(Home);