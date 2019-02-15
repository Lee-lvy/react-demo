// ES6的模块化的基本规则或是特点
// 1.每个模块只加载一次，每个js只执行一次，如果下次再去加载同目录下同个文件 直接从内存中读取。一个模块就是一个单例，或者说是一个对象。
// 2。每个模块内声明的变量都是局部变量，不会污染全剧作用域。
// 3。模块内部的变量或是函数可以通过export导出
// 一个模块可以导入别的模块
export const name = 'imooc123';
export function sayhi() {
    console.log('imooc react !');
}
// 模块指定默认输出 import 引入时不需要加{} 一个模块只允许一个默认输出
// export default function sayHello () {
//     console.log('just one');
// }
export default name;

// export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字
// 正确
// export var a = 1;
// 正确
// var a = 1;
// export default a;
// 错误
// export default var a = 1;
//上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。
