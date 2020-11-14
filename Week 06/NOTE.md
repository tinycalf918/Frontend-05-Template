1.BNF 产生式
用尖括号表示语法结构
2.js 用乔姆斯基谱系来定义 简单来说是上下文无关语法 但是存在特例
3.图灵完备性
所有的命令式语言 基本实现了图灵完备性 使用图灵机的方式 goto 和 if/while
声明式语言 通过lambda 递归实现图灵完备性
4.动态语言  runtime 运行时  静态语言 compiletime 编译时
5.范性的协变和逆变
6.命令式编程语言包含：atom原子
  expression表达式  statement语句 structrue结构 program分包

Number类型
IEEE 754 Double Float
Sign 1位 正负
Exponent 11位 指数
Fraction 52位 精度
0.toString() 会报错 因为0.会编译为0  应该用0 .toString()

String类型
character
字符集
编码 utf-8 utf-16

Boolean类型

Null&Undefined
null是关键字 但是undefined是全局变量 是可以赋值的
一般用 void 0 来表示undefined

Object类型
prototype 原型  比较自由 与class相比没那么严谨
行为改变状态
object 包含了 property和 prototype数组 原型链
object的key可以有两种形式 String和Symbol Symbol保证了key的权限
object的value有data和accessor访问器两种形式

function object
Array
host object 