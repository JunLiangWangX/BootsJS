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
// 全局导入
const BootsJS=require('boots-js');
let ascPriorityQueue = new BootsJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// 按需导入
const { PriorityQueue } = require('boots-js/priority-queue');
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('1', 1)
priorityQueue.length
```

### Browser

```
None yet
```

### ES6 Module

```js
// 全局导入
import BootsJS from 'boots-js'
let ascPriorityQueue = new BootsJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// 按需导入
import { PriorityQueue }  from 'boots-js/priority-queue'
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('1', 1)
priorityQueue.length
```

## 所有特性
[点击查看](https://junliangwangx.github.io/BootsJS/)

## 参与贡献
[点击查看](https://github.com/JunLiangWangX/BootsJS/blob/main/CONTRIBUTING(zh).md)
