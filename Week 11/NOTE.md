学习笔记

css 2.1总体结构at-rules和rule
@charset
@import
rules
  @media
  @page
  rule

At-rules：
@charset
@import
@media
@page
@counter-style
@keyframes
@fontface
@supports
@namespace

rule（css规则）：
选择器 selector_group selector simple-selector
声明 declaration
 key  分为properties和variables
 value  calc/number/length。。。

选择器语法
简单选择器
 *
 div svg｜a
 .cls
 #id
 [attr=value]
 :hover
 ::before

复合选择器
复杂选择器
 <sp> 父子
 >    直接父子
 ~    邻接
 +    邻接
 ||   某一列

 优先级
 简单选择器计数

 伪类：
 链接/行为
 树结构   :empty  :nth-child() :nth-last-child() :first-child :last-child :only-child  尽量不用last，破坏了css computing的回溯 性能不好
 逻辑型   :not :where :has

 伪元素：
  ::before
  ::after
  ::first-line  根据渲染后文本的第一行进行选中
  ::first-letter