学习笔记

mocha
- mocha是设计本身是基于nodejs，导入导出采用commonJS规范
- 如果要支持es6 import 需要配合babel进行编译处理
- npm i --save-dev @babel/register @babel/core

nyc
- 通过nyc可以进行测试覆盖率的统计
- npm i --save-dev nyc
- 配合mocha进行测试覆盖率统计 nyc mocha