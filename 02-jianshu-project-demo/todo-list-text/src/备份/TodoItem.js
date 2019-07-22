import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        // 把this的绑定放到constructor来做，这样的话,这个this永远指向todoItem,它会节约一些性能
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content, test } = this.props;
        return (
              <div onClick={ this.handleClick }>
                  {/* this.props.content */}
                 {test}-{ content }
              </div>)
    }
handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index)
}

}
// 对propTypes做属性的校验
TodoItem.propTypes = {
    test: PropTypes.string.isRequired, // isRequired必须要向子组件传值
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),  // content的类型必须是一个string类型,这个PropTypes一定要和上面引入的一样,包括首字母大写
    deleteItem: PropTypes.func,   // deleteItem是一个函数
    index: PropTypes.number      
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;