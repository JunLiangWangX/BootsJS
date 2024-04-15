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

## All Features

[Click to view](https://junliangwangx.github.io/BootsJS/)

## Contribute

[Click to view](https://github.com/JunLiangWangX/BootsJS/blob/main/CONTRIBUTING.md)