import React, { Component } from 'react';
import { HomeWrapper } from './style';
import { HomeLeft } from './style';
import { HomeRight } from './style';
import Topic from './components/Topic';
import List from  './components/List';
import Recomment from  './components/Recomments';
import Writer from './components/Writer';

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
}

export default Home;