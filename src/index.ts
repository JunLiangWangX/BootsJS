import PriorityQueue from './priority-queue';
import  RegRules from './reg-rules';
import DateTool from './date-tool';
import PerformanceTool from './performance-tool';
import StringTool from './string-tool';
import ObjectTool from './object-tool';
import ArrayTool from './array-tool';
import TreeTool from './tree-tool';

export default{
    PriorityQueue,
    RegRules,
    DateTool,
    PerformanceTool,
    StringTool,
    ObjectTool,
    ArrayTool,
    TreeTool
}

// export { PriorityQueue } from './priority-queue';
/**
 * Some common regular expression patterns.(一些常见的正则表达式规则)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.RegRules.IDCardRule.test('12948392023');
 * 
 * // -------- Import on Demand(按需引入)
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * RegRules.IDCardRule.test('12948392023');
 *  ```
 */
// export * as RegRules from './reg-rules';
/**
 * Some tools for working with date and time.(一些处理日期时间的工具)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.DateTool.dateFormater(new Date(),'YYYY-MM-DD HH:mm:ss');
 * 
 * // -------- Import on Demand(按需引入)
 * const  DateTool  = require('boots-js/date-tool'); // Node
 * import * as DateTool  from 'boots-js/date-tool' // Es6 Module
 * DateTool.dateFormater(new Date(),'YYYY-MM-DD HH:mm:ss');
 *  ```
 */
// export * as DateTool from './date-tool';
/**
 * Some methods to improve performance.(一些提升性能的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.PerformanceTool.debounce(test);
 * 
 * // -------- Import on Demand(按需引入)
 * const  PerformanceTool  = require('boots-js/performance-tool'); // Node
 * import * as PerformanceTool  from 'boots-js/performance-tool' // Es6 Module
 * PerformanceTool.debounce(test);
 *  ```
 */
// export * as PerformanceTool from './performance-tool';
/**
 * Some methods of processing strings.(一些处理字符串的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.StringTool.dashNameToUpperCamelCaseName('string-tool')
 * 
 * // -------- Import on Demand(按需引入)
 * const  StringTool  = require('boots-js/string-tool'); // Node
 * import  * as StringTool  from 'boots-js/string-tool' // Es6 Module
 * StringTool.dashNameToUpperCamelCaseName('string-tool')
 *  ```
 */
// export * as StringTool from './string-tool';
/**
 * Some tools for working with Object.(一些处理对象的工具)
 *
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.ObjectTool.type(123); //'Number'
 *
 * // -------- Import on Demand(按需引入)
 * const  ObjectTool  = require('boots-js/object-tool'); // Node
 * import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
 * ObjectTool.type(123); //'Number'
 *  ```
 */
// export * as ObjectTool from './object-tool';
/**
 * Some tools for working with array.(一些处理数组的工具)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.ArrayTool.removeDuplicates([1,2,3,1]);
 * 
 * // -------- Import on Demand(按需引入)
 * const  ArrayTool  = require('boots-js/array-tool'); // Node
 * import * as ArrayTool  from 'boots-js/array-tool' // Es6 Module
 * ArrayTool.removeDuplicates([1,2,3,1]);
 *  ```
 */
// export * as ArrayTool from './array-tool';
/**
 * Some tools for working with tree.(一些处理树的工具)
 *
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.TreeTool.tree2Array(tree,'childList',options)
 *
 * // -------- Import on Demand(按需引入)
 * const  TreeTool  = require('boots-js/tree-tool'); // Node
 * import * as TreeTool  from 'boots-js/tree-tool' // Es6 Module
 * TreeTool.tree2Array(tree,'childList',options)
 *  ```
 */
// export * as TreeTool from './tree-tool';