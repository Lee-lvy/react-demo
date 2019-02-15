import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ES6';
import { Button } from 'antd-mobile';

import './xx.less';

import 'antd-mobile/lib/button/style/index.less';

// import 'antd-mobile/dist/antd-mobile.css'
// import {createStore} from 'redux';

class App extends Component {
  render() {
    const boss="LeeDaDa"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>welcome to lgh country!</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>独立团，团长{boss}</p>
          <Yiyin laoda='lgh233'/>
          <Qibinglian 老大="23333"/>
        </header>
      </div>
    );
  }
}

class Yiyin extends Component {
  // 构造函数 实例化的时候都会执行
  // 在class方法中 继承使用extends关键字来实现。子类必须在constructor()调用super()方法
  // 否则构造实例会报错 因为子类没有自己的this对象 而是继承父类的this对象
  // uper()和super(props)的区别就是你是否需要在构造函数内使用this.props，如果需要那么你就必须要写props，如果不需要，那么写不写效果是一样的
  constructor(props){
    super(props)
    // 初始化状态
    this.state = {
      solders:['虎子','柱子','王二']
    }
    console.log('组件初始化');
    //强制绑定在这个class实例上 每一个 方式1
    // this.addSolder = this.addSolder.bind(this) 
  }
  componentWillMount() {
    console.log('组件马上就要挂载了');
  }
  componentDidMount() {
    console.log('组件已经挂载');
  }
  componentWillReceiveProps(nextProps) {
    console.log('组件要接受父组件的值了');
  }
  // 正常情况下 加载进入时 组件初始化 组件就要挂载 组件加载ing 组件已经挂载

  shouldComponentUpdate() {
    console.log('判断是否要更新组件')
    return true;
  }
  componentWillUpdate() {
    console.log('马上就要更新组件了')
  }
  componentDidUpdate() {
    console.log('组件更新完毕')
  }
  // 当页面进行交互时 判断是否更新组件 马上更新组件 组件加载ing  组件更新完毕

  componentWillUnmount() {
    console.log('组件卸载了')
  }
  addSolder(){
    console.log('hello add solder')
    // this.setState 修改 state 记得返回新的 state 而不是修改
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  render() {
    console.log('组件正在加载ing');
    return (
      <div>
        <h2>一营营长，{this.props.laoda}</h2>
        {/* 使用箭头函数 直接绑定在实例上 方式2 */}
        <Button type="primary" onClick={() => this.addSolder()}>新兵入伍</Button>
        <ul>
          {this.state.solders.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 如果组件只有render函数，可以用函数的形式写组件
function Qibinglian(props){
  return <h2>骑兵连连长{props.老大},冲啊！！！</h2>
}

export default App;
