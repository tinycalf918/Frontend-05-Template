### 持续集成
- daily build 因为前端build速度较快 可以缩短build 时间
- BVT  build verification test 构建验证测试 前端采用更轻量级的lint

### git hook
- 在git init后的项目中查看.git隐藏文件夹中的hooks
- 在hooks文件夹中可以添加各种自定义hook文件 对各种git操作进行拦截处理

### eslint
- 安装eslint
`` npm install eslint --save-dev ``
- 初始化eslint配置
`` npx eslint --int ``
- 对某个文件执行eslint校验
`` npx eslint xxx.js ``

### 在git hook中使用eslint api进行提交前的代码校验
- 在pre-commit hook中引入eslint api，对需要lint的代码进行校验，检查有错误则 process.exitCode = 1
- 使用child_process执行git stash命令 处理git提交时的边界问题

### 无头浏览器
- chrome headless 模式
- 在mac下执行alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"，就可以使用chrome命令打开浏览器
- 执行chrome --headless 就可以打开一个无头浏览器
- chrome --headless --dump-dom about:blank 使用dump-dom 可以打印dom结构
- 在node环境下 可以使用chrome推出的puppeteer库
- 基于puppeteer无头浏览器库获取dom等一系列能力可以进行重量级的单位测试和功能测试

使用lint和无头浏览器，并结合git hooks就可以构建完整的持续集成能力