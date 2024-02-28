# ![logo](https://github.com/JunLiangWangX/BootsJS/blob/main/resource/logo.png?raw=true)

[EN](https://github.com/JunLiangWangX/BootsJS/blob/main/README.md) | [中文](https://github.com/JunLiangWangX/BootsJS/blob/main/README(zh).md)

BootsJS is a library dedicated to extending the capabilities of native JavaScript, aiming to address common data structures, methods, and frequently used algorithms that are not natively supported in JavaScript.

## Installation

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

## Usage

### CommonJS

```javascript
// Global Import
const BootsJS=require('boots-js');
let ascPriorityQueue = new BootsJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// Import on Demand
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
// Global Import
import BootsJS from 'boots-js'
let ascPriorityQueue = new BootsJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// Import on Demand
import { PriorityQueue } = from 'boots-js/priority-queue'
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('1', 1)
priorityQueue.length
```

## All Features

[Click to view](https://junliangwangx.github.io/BootsJS/)

## Contribute

[Click to view](https://github.com/JunLiangWangX/BootsJS/blob/main/CONTRIBUTING.md)