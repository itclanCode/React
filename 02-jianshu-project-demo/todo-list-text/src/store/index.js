import { createStore, applyMiddleware, compose } from 'redux'; // 从redux第三方模块中引入一个createStore方法
import reducer from './reducer';  // 把reducer传递给store,引入笔记本,然后在下面将reducer作为参数传给createStore
import thunk from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);    
const store = createStore(reducer,enhancer);


export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 调用这个createStore方法就可以创建store这个方法出来,创建了一个公共的数据存储仓库


