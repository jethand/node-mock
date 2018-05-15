## Install
```bush
npm install
```
## Run

### Development
```bush
node server.js
```

## 功能

- 基于express模拟离线演示环境
- 暂不支持热更新

## 文件结构
```shell
.
├── mock-data  mock数据地址
    ├── .json  不同模块的json配置
└── utils 一些配置信息

## 备注

关于路由配置，参考 [express router](http://www.expressjs.com.cn/guide/routing.html "express router") inline link. 

## Changelog

v1.0.0
 
1. Get，Post，Delete，Put的请求示例