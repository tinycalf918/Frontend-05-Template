1.reference 应用类型 
包含了object 和key

member expression 优先级大于call expression

类型转换

1.拆箱转换
toPremitive
toString和valueOf 已经Symbol.toPrimitive 会影响toPremitive的结果
Symbol.toPrimitive的优先级最高

2.装箱转换
基本类型的包装类 

运行时
1.completion record 完成记录  描述语句执行的结果
completion record的组成
type：normal，break，continue，return，throw
value：基本类型
target： lable

简单语句
expression empty debugger throw continue break return
符合语句
block if switch iteration with labelled try

声明
function generator asyncFunction asyncGenerator variable class lexical

预处理
var 不管写在哪  都会被声明到所在函数作用域内
const 也是有预处理机制的 也会声明为块作用域内的变量 只是在声明前被使用会报错

作用域
花括号 块作用域

js结构化

js执行粒度
宏任务  传给js引擎的任务
微任务  js引擎内部的任务 由promise产生

事件循环
getcode -》 execute -》 wait -》 getcode

函数调用
栈式调用
execution context

每个函数都会生成一个闭包  函数的environment record会作为属性保存在闭包中

realm 存放内置对象