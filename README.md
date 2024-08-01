# ![logo](https://github.com/JunLiangWangX/BootsJS/blob/main/resource/logo.png?raw=true)

Being needed by others is a very happy thing, so there is BootsJS, a powerful JS tool library.

[EN](https://github.com/JunLiangWangX/BootsJS/blob/main/README.md) | [中文](https://github.com/JunLiangWangX/BootsJS/blob/main/README(zh).md)

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
https://unpkg.com/boots-js@latest/umd/index.js
```

## Usage

### CommonJS

```javascript
// Global Import
const BootsJS=require('boots-js/cjs');
BootsJS.ObjectUtils.type(123);
// Import on Demand
const  ObjectUtils  = require('boots-js/cjs/object-utils');
ObjectUtils.type(123);
```

### Browser

```html
// Global Import
<script src="https://unpkg.com/boots-js@latest/umd/index.js"></script>
<script>BootsJS.ObjectUtils.type(123);</script>
// Import on Demand
<script src="https://unpkg.com/boots-js@latest/umd/object-utils.js"></script>
<script>ObjectUtils.type(123);</script>
```

### ES6 Module

```js
// Global Import
import BootsJS from 'boots-js'
BootsJS.ObjectUtils.type(123);
// Import on Demand
import  ObjectUtils  from 'boots-js/object-utils' 
ObjectUtils.type(123);
```

## All Features

[Click to view](https://junliangwangx.github.io/BootsJS/)

## Contribute

[Click to view](https://github.com/JunLiangWangX/BootsJS/blob/main/CONTRIBUTING.md)