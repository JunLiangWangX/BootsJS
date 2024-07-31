import PriorityQueue from './priority-queue';
import  RegRules from './reg-rules';
import DateUtil from './date-util';
import PerformanceUtil from './performance-util';
import StringUtil from './string-util';
import ObjectUtil from './object-util';
import ArrayUtil from './array-util';
import TreeUtil from './tree-util';

export default{
    PriorityQueue,
    RegRules,
    DateUtil,
    PerformanceUtil,
    StringUtil,
    ObjectUtil,
    ArrayUtil,
    TreeUtil
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
 * Some utils for working with date and time.(一些处理日期时间的工具)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.DateUtil.dateFormater(new Date(),'YYYY-MM-DD HH:mm:ss');
 * 
 * // -------- Import on Demand(按需引入)
 * const  DateUtil  = require('boots-js/date-util'); // Node
 * import * as DateUtil  from 'boots-js/date-util' // Es6 Module
 * DateUtil.dateFormater(new Date(),'YYYY-MM-DD HH:mm:ss');
 *  ```
 */
// export * as DateUtil from './date-util';
/**
 * Some methods to improve performance.(一些提升性能的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.PerformanceUtil.debounce(test);
 * 
 * // -------- Import on Demand(按需引入)
 * const  PerformanceUtil  = require('boots-js/performance-util'); // Node
 * import * as PerformanceUtil  from 'boots-js/performance-util' // Es6 Module
 * PerformanceUtil.debounce(test);
 *  ```
 */
// export * as PerformanceUtil from './performance-util';
/**
 * Some methods of processing strings.(一些处理字符串的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.StringUtil.dashNameToUpperCamelCaseName('string-util')
 * 
 * // -------- Import on Demand(按需引入)
 * const  StringUtil  = require('boots-js/string-util'); // Node
 * import  * as StringUtil  from 'boots-js/string-util' // Es6 Module
 * StringUtil.dashNameToUpperCamelCaseName('string-util')
 *  ```
 */
// export * as StringUtil from './string-util';
/**
 * Some utils for working with Object.(一些处理对象的工具)
 *
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.ObjectUtil.type(123); //'Number'
 *
 * // -------- Import on Demand(按需引入)
 * const  ObjectUtil  = require('boots-js/object-util'); // Node
 * import * as ObjectUtil  from 'boots-js/object-util' // Es6 Module
 * ObjectUtil.type(123); //'Number'
 *  ```
 */
// export * as ObjectUtil from './object-util';
/**
 * Some utils for working with array.(一些处理数组的工具)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.ArrayUtil.removeDuplicates([1,2,3,1]);
 * 
 * // -------- Import on Demand(按需引入)
 * const  ArrayUtil  = require('boots-js/array-util'); // Node
 * import * as ArrayUtil  from 'boots-js/array-util' // Es6 Module
 * ArrayUtil.removeDuplicates([1,2,3,1]);
 *  ```
 */
// export * as ArrayUtil from './array-util';
/**
 * Some utils for working with tree.(一些处理树的工具)
 *
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.TreeUtil.tree2Array(tree,'childList',options)
 *
 * // -------- Import on Demand(按需引入)
 * const  TreeUtil  = require('boots-js/tree-util'); // Node
 * import * as TreeUtil  from 'boots-js/tree-util' // Es6 Module
 * TreeUtil.tree2Array(tree,'childList',options)
 *  ```
 */
// export * as TreeUtil from './tree-util';