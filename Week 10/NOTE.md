学习笔记
flex 分行  按主轴进行分行  如果设置了nowrap则强行放到第一行

主轴计算
找出flex元素
把主轴剩余尺寸按flex比例分配
如果剩余空间为负数，把所有flex元素设为0，然后等比压缩剩余元素
没有flex元素则根据justify-content来计算

计算交叉轴
根据flex-align和item-align属性设置

绘制单个元素
绘制需要依赖一个图形环境
采用npm包images
绘制在一个viewport上进行
与绘制相关的属性：background-color、border、background-image等。gradient需要WebGL相关的库来处理

绘制DOM
递归调用子元素的绘制方法完成DOM树的绘制
忽略一些不需要绘制的节点
实际浏览器中，文字绘制是难点，需要依赖字体库，把字体变成图片去渲染
实际浏览器中，还会对一些图层做compositing