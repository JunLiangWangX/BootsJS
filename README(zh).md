# ![logo](https://github.com/JunLiangWangX/BootsJS/blob/main/resource/logo.png?raw=true)

被别人需要是一件很幸福的事情，因此有了BootsJS这个强大的JS工具库。

[EN](https://github.com/JunLiangWangX/BootsJS/blob/main/README.md) | [中文](https://github.com/JunLiangWangX/BootsJS/blob/main/README(zh).md)

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
