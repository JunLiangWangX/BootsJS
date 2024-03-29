/*
 * @Description: Some tools for working with array.(一些处理数组的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-28 11:01:41
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-03-28 11:35:03
 */
import { ObjectTool } from "./object-tool";

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
 * const { ArrayTool } = require('boots-js/array-tool'); // Node
 * import { ArrayTool } from 'boots-js/array-tool' // Es6 Module
 * ArrayTool.removeDuplicates([1,2,3,1]);
 *  ```
 */
export  class ArrayTool {

    /**
     * Remove duplicate values ​​from array.(数组去除重复值)
     * @param {Array} arr Given an array.(给定数组)
     * @param {boolean} isCompareValue Whether to perform value comparison for elements of reference type.(对于引用类型的元素是否进行值比对)
     * @example
     * const test1={a:'1'},test2={a:'1'},
     * arr1=[test1,test2,test1],
     * arr2=[1,2,3,1,4];
     * ArrayTool.removeDuplicates(arr1) // [{a:'1'},{a:'1'}]
     * ArrayTool.removeDuplicates(arr1,true) // [{a:'1'}]
     * ArrayTool.removeDuplicates(arr2) //[1,2,3,4];
     */    
    static removeDuplicates(arr: Array<any>, isCompareValue: boolean = false): Array<any> {
        if (!Array.isArray(arr)) {
            console.warn(`${arr} not an Array!`);
            return arr;
        }
        const uniSet = new Set(), result: Array<any> = [];
        arr.forEach((val) => {
            if (isCompareValue) {
                const key = ObjectTool.argToStrKey(val)
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
}