/*
 * @Description: Some tools for working with Object.(一些处理对象的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-21 20:15:10
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-03-25 17:47:40
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

  static deepClone(obj: any): any {
    let type = this.type(obj);
    if (type in PrimitiveTypeEnum) return obj;
    if (type in TypedArrayEnum) return new obj.constructor(obj);
  }

  static isEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    let type1 = this.type(obj1), type2 = this.type(obj2);
    if (type1 !== type2) return false;
    // if (PrimitiveTypeEnum.includes(type1)) return obj1 === obj2;
    if (type1 in TypedArrayEnum) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) if (obj1[i] !== obj2[i]) return false;
      return true;
    }
    return false;
  }
}

/**
 * Primitive type enum(原始类型枚举)
 */
enum PrimitiveTypeEnum {
  'Number',
  'String',
  'Boolean',
  'Null',
  'Undefined',
  'Symbol',
  'BigInt'
};

/**
 * TypedArray type enum(数值数组类型枚举)
 */
enum TypedArrayEnum {
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "BigInt64Array",
  "BigUint64Array"
};
/**
 * Array type enum(数组类型枚举)
 */
const ArrayTypeEnum = ["Array", "ArrayBuffer", 'DataView'];
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
//type TypeEnum = PrimitiveTypeEnum | ArrayTypeEnum | OtherTypeEnum;
