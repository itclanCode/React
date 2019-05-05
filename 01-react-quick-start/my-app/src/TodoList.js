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
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
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
        });
    }
    render() {
        return (
            <div>
                <div>
                    <input  value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map(function(item, index) {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;