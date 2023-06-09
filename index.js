// 引入所需的模块
const express = require('express');

// 创建 Express 应用程序
const app = express();

// 定义路由
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
