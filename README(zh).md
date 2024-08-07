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
https://unpkg.com/boots-js@latest/umd/index.js
```

## 使用

### CommonJS

```javascript
// 全局导入
const BootsJS=require('boots-js/cjs');
BootsJS.ObjectUtils.type(123);
// 按需导入
const  ObjectUtils  = require('boots-js/cjs/object-utils');
ObjectUtils.type(123);
```

### Browser

```html
// 全局导入
<script src="https://unpkg.com/boots-js@latest/umd/index.js"></script>
<script>BootsJS.ObjectUtils.type(123);</script>
// 按需导入
<script src="https://unpkg.com/boots-js@latest/umd/object-utils.js"></script>
<script>ObjectUtils.type(123);</script>
```

### ES6 Module

```js
// 全局导入
import BootsJS from 'boots-js'
BootsJS.ObjectUtils.type(123);
// 按需导入
import  ObjectUtils  from 'boots-js/object-utils' 
ObjectUtils.type(123);
```

## 所有特性
[点击查看](https://junliangwangx.github.io/BootsJS/)

## 参与贡献
[点击查看](https://github.com/JunLiangWangX/BootsJS/blob/main/CONTRIBUTING(zh).md)
