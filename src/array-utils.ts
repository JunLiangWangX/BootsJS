/**
 * utils for working with array.(一些处理数组的工具)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js/cjs'); // CommandJS
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.ArrayUtils.removeDuplicates([1,2,3,1]);
 * 
 * // -------- Import on Demand(按需引入)
 * const  ArrayUtils  = require('boots-js/cjs/array-utils'); // CommandJS
 * import  ArrayUtils  from 'boots-js/array-utils' // Es6 Module
 * ArrayUtils.removeDuplicates([1,2,3,1]);
 *  ```
 * @module
 */
import { argToStrKey } from "./object-utils";

/**
 * Remove duplicate values ​​from array.(数组去除重复值)
 * @param {Array} arr Given an array.(给定数组)
 * @param {boolean} isCompareValue Whether to perform value comparison for elements of reference type.(对于引用类型的元素是否进行值比对)
 * @example
 * const  ArrayUtils  = require('boots-js/cjs/array-utils'); // CommandJS
 * import  ArrayUtils  from 'boots-js/array-utils' // Es6 Module
 * 
 * const test1={a:'1'},test2={a:'1'},
 * arr1=[test1,test2,test1],
 * arr2=[1,2,3,1,4];
 * ArrayUtils.removeDuplicates(arr1) // [{a:'1'},{a:'1'}]
 * ArrayUtils.removeDuplicates(arr1,true) // [{a:'1'}]
 * ArrayUtils.removeDuplicates(arr2) //[1,2,3,4];
 */
export function removeDuplicates(arr: Array<any>, isCompareValue: boolean = false): Array<any> {
    if (!Array.isArray(arr)) {
        console.warn(`${arr} not an Array!`);
        return arr;
    }
    const uniSet = new Set(), result: Array<any> = [];
    arr.forEach((val) => {
        if (isCompareValue) {
            const key = argToStrKey(val)
            if (!uniSet.has(key)) {
                result.push(val)
                uniSet.add(key)
            }
        }
        else {
            if (!uniSet.has(val)) {
                result.push(val)
                uniSet.add(val)
            }
        }
    })
    return result
}

/**
 * @ignore
 */
export default {
    removeDuplicates
}