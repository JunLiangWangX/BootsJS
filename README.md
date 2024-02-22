# EnhanceJS

[EN](./README.md) | [中文](./README(zh).md)

EnhanceJS is a library dedicated to extending the capabilities of native JavaScript, aiming to address common data structures, methods, and frequently used algorithms that are not natively supported in JavaScript.

## Installation

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

## Usage

### CommonJS

```javascript
// Global Import
const EnhanceJS=require('enhance-js');
let ascPriorityQueue = new EnhanceJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// Import on Demand
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
// Global Import
import EnhanceJS from 'enhance-js'
let ascPriorityQueue = new EnhanceJS.PriorityQueue(true);
ascPriorityQueue.enqueue('1', 1)
ascPriorityQueue.length
// Import on Demand
import { PriorityQueue } = from 'enhance-js/priority-queue'
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('1', 1)
priorityQueue.length
```

## All Features

| Features | Introduce | Example | Detail |
| -------- | --------- | ------- | ------ |
|          |           |         |        |
|          |           |         |        |
|          |           |         |        |
