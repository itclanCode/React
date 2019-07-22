import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';

// 创建一个空对象
const defaultState = {
    inputValue: '',  // 存储input的值
    list: []         // 下面展示列表的值由reducer来管理
};  

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
    	// 
    	const newState = JSON.parse(JSON.stringify(state)); // 对之前的数据做一次深拷贝
    	newState.inputValue = action.value; // 让action.value值等于newState的一个值

    	return newState;  // 把state给做一个返回,这是一个固定的写法
    }

     if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
    	// reducer可以接收state,但是绝不能修改state,必须得拷贝一份
    	const newState = JSON.parse(JSON.stringify(state));
    	newState.list.push(newState.inputValue);
    	newState.inputValue = '';
    	return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
    	const newState = JSON.parse(JSON.stringify(state));
    	newState.list.splice(action.index, 1);
    	return newState;
    }
    console.log(state, action);
    return state;
}

/**
 * 
 * Reducer相当于一个笔记本,里面存放了图书馆很多操作,存储数据情况等,以及对数据如何操作的一些内容
 * 
 * 笔记本里要记录很多的内容
 * 
 * 这个state记录的是什么?state里面存放的就是整个图书管里所有书籍的信息
 * state就是仓库里面存储的所有数据
 * 
 * 创建好reducer，要把它传递给store
 * 
 * 
 */