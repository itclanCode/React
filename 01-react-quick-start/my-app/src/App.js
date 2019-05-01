import React, { Component } from 'react';
// 原始的写法
/*function App() {
    return (
        <div className="App">
            Learn React
        </div>
);
}*/
// 定义react组件,定义来App这样的一个类,它继承于一个Component的类
/**
 * 一个React组件里面必须要有render函数，这个函数负责这个组件要显示的内容,retrurn出去的内容,就是这个组件要显示的内容
 * export default 导出与导入时配对使用的
 * */
class App extends Component { // 等同于class App extends React.component {}的写法
    render() {
        return (
            <div className="App">
                Learn React
            </div>
        )
    }
}
export default App;
