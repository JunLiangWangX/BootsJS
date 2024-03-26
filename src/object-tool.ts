/*
 * @Description: Some tools for working with Object.(一些处理对象的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-21 20:15:10
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-03-26 18:03:40
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
   * @param {*} obj Need to determine the type of value.(需要判断类型的值)
   * @example
   * ObjectTool.type(new Array()); //'Array'
   * ObjectTool.type('123'); //'String'
   * ObjectTool.type(true); //'Boolean'
   * ObjectTool.type(new Map()); //'Map'
   */
  static type(obj: any): string {
    return Object.prototype.toString.call(obj).split(" ")[1].slice(0, -1);
  }

  static deepClone(obj: any): any {
    let type = this.type(obj);
    if (type in NumericTypeEnum) return new obj.constructor(obj);
    if (type === ArrayType) {
      let tempArray = new Array();
      for (const item of obj) tempArray.push(this.deepClone(item));
      return tempArray;
    }
    if (type === SetType) {
      let tempSet = new Set();
      for (const item of obj) tempSet.add(this.deepClone(item));
      return tempSet;
    }
    return obj
  }

  static isEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    let type1 = this.type(obj1), type2 = this.type(obj2);
    if (type1 !== type2) return false;
    if (type1 in NumericTypeEnum) return obj1.valueOf().toString() === obj2.valueOf().toString();
    if (type1 === ArrayType) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj2.length; i++)if (this.isEqual(obj1[i], obj2[i]) === false) return false
      return true
    }
    if (type1 === SetType) {
      let tempArray1 = Array.from(obj1), tempArray2 = Array.from(obj2);
      tempArray1.sort(); tempArray2.sort();
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj2.length; i++)if (this.isEqual(obj1[i], obj2[i]) === false) return false
      return true
    }
    return false;
  }
  static argToKey(arg: any, visited = new Set<any>()): string {
    let type = Object.prototype.toString.call(arg).split(" ")[1].slice(0, -1);
    if (visited.has(arg)) return '[Circular Reference]';
    visited.add(arg);
    if (type in NumericTypeEnum || type === FunctionType) return arg.toString();
    if (type === ArrayBufferType) return new Int8Array(arg).toString();
    if (type === DataViewType) return new Int8Array(arg.buffer).toString();
    if (type === ObjectType) {
      let sortArray: string[] = [];
      let argList: string[] = [];
      Object.keys(arg).forEach((key) => {
        sortArray.push(key);
      });
      sortArray.sort();
      for (let item of sortArray) {
        argList.push(item);
        argList.push(this.argToKey(arg[item], visited));
      }
      visited.delete(arg);
      return '{' + argList.join(':') + '}';
    }
    if (type === WeakRefType) return type + ':{' + this.argToKey(arg.deref(), visited) + '}';
    if (type === ArrayType || type === SetType) {
      let strList: string[] = [];
      for (let item of arg) strList.push(this.argToKey(item, visited));
      if(type === SetType)strList.sort()
      visited.delete(arg);
      return type + ':[' + strList.join(',') + ']';
    }
    if (type === MapType) {
      let sortArray: string[] = [];
      let keyMap = new Map();
      let argList: string[] = [];
      for (const key of arg.keys()) {
        let genKey = this.argToKey(key, visited);
        sortArray.push(genKey);
        keyMap.set(genKey, arg.get(key));
      }
      sortArray.sort();
      for (let item of sortArray) {
        argList.push(item);
        argList.push(this.argToKey(keyMap.get(item), visited));
      }
      visited.delete(arg);
      return type + ':{' + argList.join(':') + '}';
    }
    visited.delete(arg);
    return String(arg);
  }
}

/**
 * Primitive type enum(原始类型枚举)
 */
enum PrimitiveTypeEnum {
  Number = 'Number',
  String = 'String',
  Boolean = 'Boolean',
  Null = 'Null',
  Undefined = 'Undefined',
  Symbol = 'Symbol',
  BigInt = 'BigInt'
};

/**
 * Numeric type enum(数值类型枚举)
 */
export enum NumericTypeEnum {
  Int8Array = "Int8Array",
  Int16Array = "Int16Array",
  Int32Array = "Int32Array",
  Uint8Array = "Uint8Array",
  Uint16Array = "Uint16Array",
  Uint32Array = "Uint32Array",
  Float32Array = "Float32Array",
  Float64Array = "Float64Array",
  BigInt64Array = "BigInt64Array",
  BigUint64Array = "BigUint64Array",
  Date = "Date",
  RegExp = "RegExp"
};

const ArrayType = 'Array'
const SetType = 'Set'
const MapType = 'Map'
const ObjectType = 'Object'
const ArrayBufferType = 'ArrayBuffer'
const DataViewType = 'DataView'
const FunctionType = 'Function'
const WeakRefType = 'WeakRef'

// 无需处理的属性
//  "WeakMap"| "WeakSet" | "Function" | "WeakRef"
