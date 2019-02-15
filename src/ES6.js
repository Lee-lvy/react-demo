// 作用域 主要
// let 和 const
// 定义变量使用let替代var
// const定义不可修改多变量
// 作用域和{}
// {
//     var name ="json";
// }
// console.log(name);


// str
// 使用反引号 直接写变量
// 多行字符串
// 告别+拼接字符串
// name = "imooc";
// course = "React开发App";
// console.log('hello' + name + ',course is ' + course);
// // 反引号
// console.log(`hello ${name},course is ${course}`);
// console.log(`

//         fewfewgwg

// `);

// 箭头函数
// 以前：
//  function hi(name){
//      console.log(`hello ${name}`);
//  }
//  const hi1 = (name) => {
//      console.log(`hello ${name}`);
//  }
//  hi('imooc');
//  hi1('imooc');

//  setTimeout(() =>{
//     console.log('xxx');
//  }, 1000)

// 如果只有一条return语句的话可以简写
// const dobule = x => x*2;
// console.log(dobule(5)); //10

//为什么要使用箭头函数
// 1.代码更加简洁
// 2.不用回绑定this

// 赋值默认
// const hello = (name="imooc") => {
//     console.log(`hello ${name}`);
// }
// hello(); 
// hello('woniu');

// 展开运算符
// const hello = (name1,name2) => {
//     console.log(`${name1} ${name2}`);
// }
// let arr = ['imooc', 'lgh123'];
// hello.apply('',arr);
//Function.apply(obj,args)方法能接收两个参数
// obj：这个对象将代替Function类里this对象
// args：这个是数组，它将作为参数传给Function（args-->arguments)
// hello(...arr);


// object扩展

// const obj = {
//     name:'imooc',
//     course: 'React开发App'
// }
// object自带的方法 获取keys values
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// [['name','imooc], ['course', 'React开发App']]

// 属性扩展
    //examle
    // const name = 'lgh123';
    // const obj = {
    //     name,
    //     [name]: 'hello',
        // hi: function () {},
        //以前定义一个方法
        // hi2() {} 
        // 新的定义方法
    // }
    // console.log(obj);
    // hi: ƒ hi()
    // hi2: ƒ hi2()
    // lgh123: "hello"
    // name: "lgh123"
    // __proto__: Object
    // object拼接 对象展开运算符
    // const ob1 = {name: 'lgh123', course: 'React'};
    // const ob2 = {type: 'IT', name: 'lgh233'};
    // console.log({...ob1,...ob2,data:'001'});

// 解构赋值
    // const arr = ['hello', 'imooc'];
    // let [arr1, arr2] = arr;
    // console.log(arr1,'|',arr2);
    // const obj = {name: 'lgh123', course: 'react'};
    // let {name, course} = obj;
    // console.log(name, '|', course);

// 类的语法糖 class
// class MyApp{
//     constructor(){
//         this.name = 'imooc';
//     }
//     sayHi(){
//         console.log(`hello ${this.name} !`);
//     }
// }
// const app = new MyApp();
// app.sayHi()

// ES6中新出现的数据结构
    // Set 元素不可重合
    // Map
    // Symbol

// 模块化
// ES6的模块化的基本规则或是特点
// 1.每个模块只加载一次，每个js只执行一次，如果下次再去加载同目录下同个文件 直接从内存中读取。一个模块就是一个单例，或者说是一个对象。
// 2。每个模块内声明的变量都是局部变量，不会污染全剧作用域。
// 3。模块内部的变量或是函数可以通过export导出
// 一个模块可以导入别的模块
// import {name, sayhi} from './model1'
// console.log(name);
// sayhi();
// 假设我们写了一个单页面组件 A 文件，而在另一个文件 B 里面需要用到它，
// 那么就要用 ES6 的 import/export 语法 ，在文件 A 中定义输出接口 export ，
// 在文件 B 中引入 import ，把引入的组件用起来，这样就可以复用组件 A 去配合文件 B 生成 html 页面了。
// import test from './model1';
// console.log(test);
// 若想引入所有的可以
// import * as model from './model1';
// console.log(model);

// 其支持对象扩展符和装饰器
// babel-plugin-transform-object-rest-spread插件,支持扩展符号
// 装饰器
// Async await

// ES6其他特性：
// Promise
// 迭代器和生成器
// 代理Proxy




// 常见代码块
// 关于数组
// const arr = [1, 2, 3, 4];
// const arr2 = [3, 4, 5];
// const arr3 = [1,2,4,2,5,1];
// 遍历数组
// arr.forEach((value, index) => {
//     console.log(`${value} | ${index}`);
// });
// 映射新数组
// console.log(arr.map(function(v){
//     return v = 2;
// }));
// console.log(arr.map(v=>v=2));
// 所有元素是否通过测试
// console.log(arr.every(v => v>3));
// 是否有元素通过测试
// console.log(arr.some(v => v>4));
// 过滤数组
// console.log(arr.filter(v => v>3));
// 连接数组
// console.log([...arr,...arr2]);
// 数组去重
// console.log(...new Set(arr3));
// 查找索引
// console.log(arr.indexOf(2));

// 关于对象
const obj = {name:'lgh111',age:18};
// 获取对象的key
// console.log(Object.keys(obj));
// 获取对象里数据的数量
// console.log(Object.keys(obj).length);
// 遍历对象 变成数组
// console.log(Object.entries(obj));
// entend功能添加
// console.log({...obj,job:'IT',age:32});
// 获取列表的头和尾
// const [head, ...tail] = [1, 2, 3];
// const [last, ...arr] = [1, 2, 3].reverse();
// ...扩展运算符，返回的数组的iterator接口










//  example  
// 1.Array.includes 
// 一般我们判断 或  用 ||
// function test (fruit) {
//     if (fruit === 'apple' || fruit === 'orange') {
//         console.log('red');
//     }
// }



// const map = new Map();
// map.set('foo', true);
// map.set('bar', false);

// const first = map[0]

// console.log(map, first)


// const set = new Set([1,2,3])

// const arr = [1,2,3]

// console.log(set.__proto__.__proto__)

// console.log(arr.__proto__)

// console.log(arr.__proto__.__proto__)

// console.log(set)

// console.log(Function, Object, Number, Boolean)