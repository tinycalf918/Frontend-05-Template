HTML的定义：XML与SGML

DTD与XML的namespace
不推荐使用nbsp 应该使用css white-space
quto 双引号
amp &
lt <
gt >

HTML标签语义
aside
nav
main 整个页面只有一个 主体部分
article 文章
hgroup 标题组
abbr   缩写
strong
em 辅助的语气表示 重音
figure  规定独立的流内容（图像、图表、照片、代码等等）
figcaption 为 figure 添加标题（caption）
ol 语义上有顺序性
ul 无顺序
dfn 文本定义
pre 预处理文本
samp  示例
code 代码
footer

HTML语法
字符引用 &#161 表示161这个码值的字符

浏览器API

DOM API
节点类api
Node  Element                   HTMLElement
                                SVGElement
      Document
      CharacterData 字符数据
      DocumentFragment 文档片段
      DocumentType 文档类型
导航类操作
parentNode childNodes firstChild lastChild nextSibling previousSibling
parentElement children firstElementChild lastElementChild nextElementSibling previousElementSibling
修改操作
appendChild
insertBefore
removeChild
replaceChild
高级操作
compareDocumentPosition 比较两个节点中关系
contains 检查节点是否包含另一个节点
isEqualNode 判断两个节点是否完全相等
isSameNode
cloneNode 复制节点 可以支持深拷贝

事件API
冒泡与捕获 capture

Range API
new Range()
setStart(element, offset)
setEnd(element, offset)
document.getSelection().getRangeAt(0)
setStartBefore
setEndBefore
setStartAfter
setEndAfter
selectNode
selectNodeContents
extractContents 从dom上取出fregment
insertNode

CSSOM
document.stylesheets

Rules
styleSheets[0].cssRules
styleSheets[0].insertRulr
styleSheets[0].removeRule(0)

window.getComputedStyle(elt, pseudoElt) 获取元素的css计算属性

View
window
window.innerHeight window.innerWidth
window.outerWidth window.innerHeight
window.devicePixelRatio    dpr
window.screen
window.open 打开新链接
moveTo(x,y)
moveBy(x,y)
resizeTo(x,y)
resizeBy(x,y)

scroll
scrollTop
scrollLeft
scrollWidth
scrollHeight
scroll(x,y)
scrollBy(x,y)
scrollIntoView()

layout
getClientRects()  获取元素所有的盒子
getBoundingClientRect()

其他API
标准化组织
khronos  WEBGL
ECMA ECMAScript
WHATWG  HTML
W3C  webaudio   CG/WG