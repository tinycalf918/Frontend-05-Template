盒

css选择器选中的元素，在排版时可能产生多个盒
排版和渲染的基本单位是盒

盒模型：
box-sizing：
  content-box  只包含content
  border-box   包含了content和padding

正常流：
inline-box 行内盒
block-level-box 块级盒
line-box 行盒
BFC和IFC

行级排布：
baseline 基线
行模型：
line-top
text-top
base-line
text-bottom
line-bottom
行内盒默认以基线对齐，可以通过vertical-align来设置

块级排布：
float和clear
margin折叠  只会发生在BFC中

BFC合并
block container  里面有BFC
block-level box  外面有BFC
block box        里外都有BFC

设立BFC
1.floats
2.absolute position
3.block container
4.block box && overflow：visible

第二代排版flex：

动画与绘制
Animation
1.@keyframes定义
2.animation使用

transition

timing-function 三次贝塞尔曲线
三次贝塞尔曲线有强大的拟合能力

颜色
印刷行业的CMYK
RGB
HSL和HSV

绘制
几何图形
文字
位图
不推荐使用border等奇技淫巧去绘制图形  可以使用data uri + svg