/**
 * @Author itclancoder
 * @Descortaion react入口文件
 * @Date 2019/5/2
 * @param
 * @return
 *
 * App就是一个组件,在react中以大写字母开头的,都是组件
 * RectDom会把App这个组件渲染到后面的root标签里面去,加载一个组件,并把组件渲染到页面上
* */

import React from 'react'; // 加载react这个库,识别react的语法(例如首字母大写),识别jsx语法
import ReactDOM from 'react-dom'; // ReactDom可以让一个组件挂载到页面的一个节点上
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
