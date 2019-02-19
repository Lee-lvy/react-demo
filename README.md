This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


#1.1react开发环境
 npm install -g create-react-app
 React脚手架搭建： create-react-app 
 npm stast 开启调试环境
 浏览器访问locallhost：3000查看调试页面
 文件结构
 —— README.md --------- 介绍文档
 —— node_modules ------ 第三方安装包
 —— package.json ------ npm项目配置
 —— .gitignore -------- git 配置
 —— public ------------ 公共资源
  —— index.html ------- 首页html
 —— src --------------- 源码目录
  —— App.css ---------- css文件
  —— App.js ----------- React组件
  —— index.js --------- 入口js文件
  —— logo.svg --------- svg图片

  如何使用create-react-app
    npm install redux --save 安装第三方库redux
    npm run eject 弹出配置文件 可以自定义配置webpack
    扩展package.json里的script字段， 扩展npm run 命令
#1.2 ES6 新多js语法标准
 2015年6月正式发布
 使用babel语法转换器 支持低端浏览器
 流行多库基本都基于ES6构建 React默认使用ES6新语法开发

#1.3 express + mongodb 开发web后台端口
 Express开发web接口
 非关系型数据库mongodb （存储json类似的）
 >>> Express
    基于nodejs 快速、开放、极简的web开发框架
    >> npm install express --save 安装
    >> 新建server文件夹 server.js 引入express模块
       每次更新server.js都要中断重启 安装nodemon 调试工具 npm install -g nodemon
       app.get\app.post分别开发get和post接口
       app.use使用模块
       代res.send\res.json\res.sendfile响应不同的内容(分别返回文本 、json、 文件)
    >> 下载mongodb brew install mongodb
    >> 下载npm install mongoose --save 尝试在server.js中
       通过mongoose操作mongodb，存储的就是json 相对mysql来说 要易用很多
       const mongoose = require('mongoose');
       const DB_URL = 'mongodb://127.0.0.1:27017'
       mongoose.connect(DB_URL);
       mongoose.connection.on('connected',function(){
          console.log('mongo connect success11');
       })
       mongoose 定义文档模型，Schema 和 model新建模型

# 2.1 React
  组件之间用props传递数据
  > 使用<组件 数据 = “值”>的形式传递
  > 组件里面使用this.props获取值
  > 如果组件只有render函数，可以用函数的形式写组件

  组件内部state
    组件内部通过state管理状态
    > JSX本质就是js，所以直接数组.map渲染列表
    > Constructor 设置出事状态 记得执行super(props)
    > 如State就是一个不可变的对象，使用this.state获取
  事件
    > JSX里 onClick = {this.函数名} 来绑定事件
    > this 引用的问题 需要在构造函数里用bind绑定this
    > this.setState 修改 state 记得返回新的 state 而不是修改
  生命周期 react组件有若干钩子函数 在组建不同的状态执行 可以安装chrome的扩展程序
    > 初始化周期
    > 组件重新渲染生命周期
    > 组件卸载生命周期
    > antd-mobile 蚂蚁金服出品的ui组件库 https://mobile.ant.design/index-cn  兼容web和reactnative的
      > 按需加载 npm install babel-plugin-import --save 
        并在.babelrc中加上{
                          "plugins": [
                              [
                                  "import",
                                  {
                                      "libraryName": "antd-mobile",
                                      "style": true
                                  }
                              ]
                          ]
                        }
      import 后可直接使用，展示几个典型的 后面需要可到官网查找
        > Layout布局
        > 表单组件 数据展示组件 选择器等等
        > 操作组件

# redux 专注于状态管理的库
  > Redux 专注于状态管理 和 react解藕  npm install --save redux
  > 单一状态 单向数据流
  > 核心概念：store state action reducer
    状态少可以用setState管理 但是多状态后需要用redux管理 view只管显示
  > 主要功能
    保险箱 store   记录 state   专员 dispatch  做什么 action
    处理变化的 reducer 拿到state 和 action  生成新的state
    > 通过 reducer 新建store 通过store.getState 获取状态
    > 需要状态变更 store.dispatch(action) 来修改状态
    > reducer 函数接受state 和 action 返回新的 state 可以用store.subscribe 监听每次修改
      example：
        index.js: 
          import { createStore } from 'redux';
          const counter (state=0, action){
            switch(action.type){
              case '加机关枪':
                  return state+1; 
              case '减机关枪':
                  return state-1;
              <!-- 默认 -->
              default:
                  return 10;
            }
          }
          const store = createStore(counter); //建立store
          <!-- 监听改变方法 -->
          const listener (){
            const current = store.getState();
          }
          store.subscribe(listener);
          <!-- 派发事件 传递action -->
          store.dispatch('加机关枪');
          console.log(store.getState());
      redux 和 react 如何一起使用：
        store.dispatch()方法传递给组件 内部可以调用修改状态
        subscribe 订阅 render 函数 每次修改都要重新渲染
        redux 相关内容 移到单独的文件index.redux.js单独管理 
      更进一步 redux处理异步
        redux处理异步，需要redux-thunk插件 npm install redux-thunk --save
          > 使用applyMiddleware开启thunk中间件
          > Action可以返回函数 使用dispatch提交action
        react-redux react绑定库 优雅链接react和redux
        redux-devtools 开发者工具
       

