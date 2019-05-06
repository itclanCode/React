/**
 * @Author itclancoder
 * @Descortaion TodoList
 * @Date 2019/5/2
 * @param
 * @return
 * this指向问题,指向的是button本身,怎么让里面的this指向最外层的那个TodoList本身
 *
 * */
import React from 'react';
import TodoItem from './TodoItem';

import './todoItem.css';
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
        // 性能代码优化,对于this绑定的优化
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick =  this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleBtnClick() {
        // 这里的this其实是button按钮,在react中不要直接的去更改state的数据,应当使用this.setState的语法
        this.setState({
            list: [ ...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    /*handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }*/
    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
    getTodoList () {
        return (
            this.state.list.map((item, index) => {
            return(
                <TodoItem deleteItem={this.handleDelete}
                          content={item}
                          key={index}
                          index={index}
                />
            )
            // return <li key={index} onClick={this.handleItemDelete.bind(this)}>{item}</li>
            })
        )
    }
    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接收父组件传递过来的参数
    render() {
        return (
            <div>
                <div>
                    <input  className="todoInput"   value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button style={{background:'red', color:'#fff'}} onClick={this.handleBtnClick}>add</button>
                </div>
                <div>
                    <ul>
                        {this.getTodoList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;