服务器框架 Express

nodejs 流
- 可读流
- 通常监听data事件 获取数据
- 监听end事件 处理流读取结束
- pipe方法 把一个流倒入到另一个流

- 可写流
- write 方法 
- drain事件 表示write完成
- end 方法

发布流程
- 发布命令行工具 打包发布文件 传输给发布server
- 发布server接收文件 解压到 真实server服务目录下

发布鉴权
- 发布命令行工具 打开github oauth认证链接 带上client-id
- github认证后 携带授权码code 回调发布server链接
- 发布server接收到授权码code后 调用github oauth api 获取access-token 并将access-token通过调用发布命令行工具服务传输
- 发布命令行工具接收到access-token 发起publish流程，携带access-token和需要发布的压缩资源文件请求发布server
- 发布server接收到publish请求，用access-token调用github api 获取用户信息，并进行鉴权判断，通过则允许发布，解压文件到真实server服务目录下