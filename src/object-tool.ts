/*
 * @Description: Some tools for working with Object.(一些处理对象的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-21 20:15:10
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-03-21 22:30:00
 */

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
 * const { ObjectTool } = require('boots-js/object-tool'); // Node
 * import { ObjectTool } from 'boots-js/object-tool' // Es6 Module
 * ObjectTool.type(123); //'Number'
 *  ```
 */
export class ObjectTool {
  /**
   * @description: Determine parameter type.(判断给定参数类型)
   * @param {*} val Need to determine the type of value.(需要判断类型的值)
   * @example
   * ObjectTool.type(new Array()); //'Array'
   * ObjectTool.type('123'); //'String'
   * ObjectTool.type(true); //'Boolean'
   * ObjectTool.type(new Map()); //'Map'
   */
  static type(val: any): string {
    return Object.prototype.toString.call(val).split(" ")[1].slice(0, -1);
  }
}

/**
 * Primitive type enum(原始类型枚举)
 */
type PrimitiveTypeEnum =
  | "Number"
  | "String"
  | "Boolean"
  | "Null"
  | "Undefined"
  | "Symbol"
  | "BigInt";
/**
 * TypedArray type enum(数值数组类型枚举)
 */
type TypedArrayEnum =
  | "ArrayBuffer"
  | "Int8Array"
  | "Int16Array"
  | "Int32Array"
  | "Uint8Array"
  | "Uint16Array"
  | "Uint32Array"
  | "Float32Array"
  | "Float64Array"
  | "BigInt64Array"
  | "BigUint64Array";
/**
 * Array type enum(数组类型枚举)
 */
type ArrayTypeEnum = "Array" | TypedArrayEnum;
/**
 * Map type enum(Map类型枚举)
 */
type MapTypeEnum = "Map" | "WeakMap";
/**
 * Set type enum(Set类型枚举)
 */
type SetTypeEnum = "Set" | "WeakSet";
/**
 * Other type enum(其他类型枚举)
 */
type OtherTypeEnum = "Object" | "Function" | "WeakRef" | "Date" | "RegExp";
/**
 * Type Enum(类型枚举)
 */
type TypeEnum = PrimitiveTypeEnum | ArrayTypeEnum | OtherTypeEnum;
// todo
// 判断类型
// 值比对
// 大数/小数精确计算
