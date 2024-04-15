# ![logo](https://github.com/JunLiangWangX/BootsJS/blob/main/resource/logo.png?raw=true)

[EN](https://github.com/JunLiangWangX/BootsJS/blob/main/README.md) | [中文](https://github.com/JunLiangWangX/BootsJS/blob/main/README(zh).md)

BootsJS 是一个致力于扩展原生 JavaScript 功能的库，旨在解决 JavaScript 原生不支持的常见数据结构、方法和常用算法。

## 安装

**npm:**

```
npm install boots-js
```

**yarn:**

```
yarn add boots-js
```

**cdn:**

```
None yet
```

## 使用

### CommonJS

```javascript
// Global Import
const BootsJS=require('boots-js');
BootsJS.ObjectTool.type(123);

// Import on Demand
const  ObjectTool  = require('boots-js/object-tool');
ObjectTool.type(123);
```

### Browser

```
None yet
```

### ES6 Module

```js
// Global Import
import BootsJS from 'boots-js'
BootsJS.ObjectTool.type(123); //'Number'

// Import on Demand
import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
ObjectTool.type(123); //'Number'
```

## 所有特性
[点击查看](https://junliangwangx.github.io/BootsJS/)

## 参与贡献
[点击查看](https://github.com/JunLiangWangX/BootsJS/blob/main/CONTRIBUTING(zh).md)
