# EnhanceJS

[EN](./README.md) | [中文](./README(zh).md)

EnhanceJS 是一个致力于扩展原生 JavaScript 功能的库，旨在解决 JavaScript 原生不支持的常见数据结构、方法和常用算法。

## 安装

**npm:**

```
npm install enhance-js
```

**yarn:**

```
yarn add enhance-js
```

**cdn:**

```
None yet
```

## 使用

### CommonJS

```javascript
// 全局导入
const EnhanceJS=require('enhance-js');
let ascPriorityQueue = new EnhanceJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// 按需导入
const { PriorityQueue } = require('enhance-js/priority-queue');
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
import EnhanceJS from 'enhance-js'
let ascPriorityQueue = new EnhanceJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// 按需导入
import { PriorityQueue } = from 'enhance-js/priority-queue'
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('1', 1)
priorityQueue.length
```

## 所有特性

| 特性 | 介绍 | 示例 | 详情 |
| ---- | ---- | ---- | ---- |
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |

