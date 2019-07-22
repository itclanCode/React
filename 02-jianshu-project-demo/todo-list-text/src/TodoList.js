import React, { Component, Fragment } from "react";
import 'antd/dist/antd.css';
//import { Input, Button, List} from 'antd';

// 引入store
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from "./store/actionCreators";
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super(props);
        //this.apiList = "https://www.easy-mock.com/mock/5d2c920a8d71b63bc63de28c/React-Text/list";
        //this.apiList = ["川川", "一个靠前排的90后", "itclanCoder"]
        this.handleInputChange = this.handleInputChange.bind(this);


        this.state = store.getState();  // getState()是store的一个方法
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete =  this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
        console.log(store.getState);
        // this.data = [
        //     'Racing car sprays burning fuel into crowd.',
        //     'Japanese princess to wed commoner.',
        //     'Australian walks 100km after outback crash.',
        //     'Man charged over missing wedding girl.',
        //     'Los Angeles battles huge wildfires.',
        //   ];
    }

    render() {
        return (
            <TodoListUI 
                inputValue = { this.state.inputValue }
                list = { this.state.list }
                handleInputChange = { this.handleInputChange }
                handleBtnClick = { this.handleBtnClick } 
                handleItemDelete = { this.handleItemDelete }
             />
        );
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
        // axios.get('/list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        //     console.log(action);
        // })
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,  // 指定类型,改变input_value的值
        //     value: e.target.value        // 现在的值应该是e.target.value

        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        console.log(e.target.value);
    }

    handleStoreChange(){
        console.log("storeChange");
        // 当感知到store数据发生变化的时候,去调用store.getState下面的方法,从store里面重新取一次数据,然后在调用setState替换掉组件当前的数据，这样的话组件的数据就同步了
        this.setState(store.getState());
    }

    handleBtnClick() {
        // 创建action,要做的事情
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;