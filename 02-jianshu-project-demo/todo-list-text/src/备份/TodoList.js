import React, { Component, Fragment } from 'react';
import TodoItem from "./TodoItem";
import Test from './Test';
import axios from 'axios';

import "./style.css";

class TodoList extends Component {
   
  constructor(props) { // 接收props参数
    super(props); // 调用父类的构造函数,继承父类
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    // 存储组件的状态
    this.state = {
      inputValue: '', // 用于存储input中的数据
      list: []        // 用于存储列表项
    }
  }

  // 在组件即将被挂载到页面的时候自动执行
   render () {
     console.log("render");
     return (
       <Fragment>
           <div>
             <label htmlFor="innertAfter">输入内容</label>
             <input id="innertAfter" className="input" value={ this.state.inputValue } 
                    onChange={this.handleInputChange}
           />
             <button 
                  onClick={ this.handleBtnClick}>
              提交
             </button>
            </div>
           <ul>
             { this.getTodoItem() }
           </ul>
           <Test content= { this.state.inputValue } />
       </Fragment>
     )
   }

   componentDidMount() {
  
   }

  // 组件被更新之前,它会自动的执行,但是它是在shouldComponent之后被执行
  // 如果shouldComponentUpdate返回true它才执行,如果返回false,这个函数就不会被执行了
 
   componentDidUpdate() {
     console.log("componentWillReceiveProps");
   }

 // 当一个组件从父组件接收了参数
 // 只要父组件的render函数重新被执行了,子组件的这个生命周期函数就会被执行
 // 如果这个组件第一次存在于父组件中,不会执行
 // 如果这个组件之前已经存在于父组件中，才会执行
   componentWillReceiveProps() {
      console.log("componentWIllReceiveProps");
   }

   componentWillUnmount() {
     console.log("child componentWillUnmount");
  }

   getTodoItem() {
     return (
          this.state.list.map((item, index) => {
            return (
              <div key={index}>
                  <TodoItem 
                      content={item} 
                      index={index} 
                      deleteItem={this.handleItemDelete}  
                  />
              </div>
            )     
        })
     );
   }
   handleInputChange(e) { // 监听input的变化,去更新数据,state里面的input值发生变化,input也会发生变化
     // this.state.inputValue = e.target.value;
     // console.log(e.target.value);
    //  this.setState({
    //    inputValue: e.target.value
    //  })
    //  this.setState(() => {
    //    return {
    //     inputValue: e.target.value
    //    }
    //  })
     const value = e.target.value;
     this.setState(() => ({
       inputValue: value   
     })
     )
   }

   handleBtnClick() {
      // this.setState({
      //   list: [...this.state.list, this.state.inputValue ],
      //   inputValue: ''
      // })
      this.setState( (prevState) => ({
        list: [...prevState.list, prevState.inputValue ],
        inputValue: ''
      }))
   }

   handleItemDelete(index) {
      // const list = [...this.state.list]; // 把state下面的list数据作了一份拷贝,把拷贝的list数据保存到list中
      // list.splice(index, 1);

      // this.setState({
      //   list: list
      // })

      this.setState((pervState) => {
        const list = [...pervState.list];
        list.splice(index, 1);
        return {
           list
        }
      })

   }
}


export default TodoList;

{
  /* <li
key={ index } 
onClick={ this.handleItemDelete.bind(this, index) } dangerouslySetInnerHTML={{__html: item}}>
</li> */
}