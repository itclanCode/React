import React from "react";
/*
*  在react中存在着父子组件的关系，这里的TodoItem就是子组件,而TodoList是父组件
*  1. 父组件怎么像子组件传递参数呢?通过属性的方式,向子组件传递参数
*  2. 子组件怎么接收父组件传递过来的参数? 子组件通过props的方式来接收父组件传递过来的参数
* */
class TodoItem extends React.Component {

    render() {
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}


export default TodoItem;