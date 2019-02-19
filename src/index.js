import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import { counter, addGUAN, removeGUAN } from './index.redux'
// 1 新建store
//  通过reducer建立
//  根据老的state和actiom 生成新的state
// function counter (state=0, action) {
//     switch(action.type){
//         case '加机关枪':
//             return state+1; 
//         case '减机关枪':
//             return state-1;
//         default:
//             return 10;
//     }
// }

const store = createStore(counter, applyMiddleware(thunk));

const init = store.getState();
console.log(init);

// 定义一个事件 监听改变
// function listener(){
//     const current = store.getState();
//     console.log(`现在有机关枪${current}把`);
// }
// store.subscribe(listener); 

// 派发事件 传递action
// store.dispatch({type:'加机关枪'});
// console.log(store.getState());
// store.dispatch({type:'减机关枪'});
// console.log(store.getState());

function render(){
    ReactDOM.render(<App store = {store} addGUAN = {addGUAN} removeGUAN = {removeGUAN}/>, document.getElementById('root'));
}
render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
