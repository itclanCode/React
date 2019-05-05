import React from "react";
/*
*  在react中存在着父子组件的关系，这里的TodoItem就是子组件,而TodoList是父组件
*  1. 父组件怎么像子组件传递参数呢?通过属性的方式,向子组件传递参数
*  2. 子组件怎么接收父组件传递过来的参数? 子组件通过props的方式来接收父组件传递过来的参数
* */
class TodoItem extends React.Component {
    /*
    *  删除子组件,你要告诉父组件,要删除list中的某个数据
    *  那么就涉及到子组件向父组件传值的一个问题,子组件要向父组件传送数据了的
    *  子组件怎么向父组件传值?
    *  在父组件中创建了子组件,父组件向子组件传值,通过属性的方式就可以了的
    *  如果是子组件向父组件传值
    *  子组件如果想要和父组件通信,要调用父组件传递过来的方法
    *  在子组件中调用了父组件中的delete方法,同时把index传递给了父组件的handleDelete方法
    *  那么在父组件中也能够接收到index
    *
    *  当子组件被点击的时候,你拿到这个index之后,就已经调用了父组件的方法,把这个index传递给了父组件handleDelete
    *  父组件接收到Index,就可以实现删除功能了的
    *
    *  父组件拿到index去改变父组件的内容，父组件的list内容发生改变之后呢,页面会重新渲染对应的内容
    *
    *  父组件向子组件传递内容,如何进行通信的,是通过属性的方式,父组件在调用子组件的时候
    *
    *  通过一些属性向子组件进行传值,而子组件如果想要向父组件传值,则需要调用父组件传递过来的方法
    *
    *  来进行向父组件传值操作的
    * */
    handleDelete() {
        this.props.delete(this.props.index);
    }
    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </div>
        )
    }
}


export default TodoItem;