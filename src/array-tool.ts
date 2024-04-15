/*
 * @Description: Some tools for working with array.(一些处理数组的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-28 11:01:41
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-04-15 16:34:20
 */
import { argToStrKey } from "./object-tool";

/**
 * Remove duplicate values ​​from array.(数组去除重复值)
 * @param {Array} arr Given an array.(给定数组)
 * @param {boolean} isCompareValue Whether to perform value comparison for elements of reference type.(对于引用类型的元素是否进行值比对)
 * @example
 * const  ArrayTool  = require('boots-js/array-tool'); // Node
 * import * as ArrayTool  from 'boots-js/array-tool' // Es6 Module
 * 
 * const test1={a:'1'},test2={a:'1'},
 * arr1=[test1,test2,test1],
 * arr2=[1,2,3,1,4];
 * ArrayTool.removeDuplicates(arr1) // [{a:'1'},{a:'1'}]
 * ArrayTool.removeDuplicates(arr1,true) // [{a:'1'}]
 * ArrayTool.removeDuplicates(arr2) //[1,2,3,4];
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