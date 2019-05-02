/**
 * 一个React组件里面必须要有render函数，这个函数负责这个组件要显示的内容,retrurn出去的内容,就是这个组件要显示的内容
 * export default 导出与导入时配对使用的 refactor
 * */
import React, { Component } from 'react';
import HelloMessage from  './HelloMessage';  // 引入HelloMessage组件
// 定义react组件,定义来App这样的一个类,它继承于一个Component的类
class App extends Component {
    render() {
        return (
            <div className="App">
                 <HelloMessage name="itclancoder" />
                 这是一个HelloMessage组件
            </div>
        )
    }
}
export default App;
