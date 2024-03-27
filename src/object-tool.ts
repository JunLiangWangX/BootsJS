/*
 * @Description: Some tools for working with Object.(一些处理对象的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-21 20:15:10
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-03-27 17:10:29
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
   * Determine parameter type.(判断给定参数类型)
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
  /**
   * Deep clone object.(深度拷贝对象)
   * @param {any} obj Value to be copied.(需要拷贝的值)
   * @example
   * // Supported types: primitive types, TypedArray, Array, Set, Map, Object, ArrayBuffer, DataView, Date,
   * //                  RegExp, Symbol, Proxy(Will be treated like an object, interceptors cannot be copied)
   * // Notice:Unsupported types, such as Function, WeakRef, WeakSet, WeakMap, etc., will directly copy their references.
   * 
   * // 支持的类型：原始类型、TypedArray、Array、Set、Map、Object、ArrayBuffer、DataView、
   * //            Date、RegExp、Symbol、Proxy（将被视为对象，拦截器无法复制）
   * // 注意：不支持的类型，例如：Function、WeakRef、WeakSet、WeakMap等会直接复制其引用
   * 
   * const obj1={Number:1},obj2={Boolean:2},obj3={obj:obj1,String:'123'},
   * const testObj={
   *    Int8Array:new Int8Array([1,2,3,4,5]),
   *    Date:new Date(),
   *    RegExp:/1234/,
   *    Array:new Array(...[obj1,obj2,obj3]),
   *    Set:new Set([obj1,obj2,obj3]),
   *    Map:map,
   *    Object:obj3,
   *    ArrayBuffer:new ArrayBuffer(10),
   *    DataView:new DataView(new ArrayBuffer(10)),
   *    Function:fun
   * }
   * 
   * let deepCopyObj=ObjectTool.deepClone(testObj)
   * deepCopyObj.Int8Array===testObj.Int8Array //false
   * deepCopyObj.Date===testObj.Date //false
   * deepCopyObj.Object.obj1.obj===testObj.Object.obj1.obj //false
   */
  static deepClone(obj: any): any {
    let that = this;
    function clone(obj: any, visited = new Map()): any {
      let type = that.type(obj);
      if (type in NumericTypeEnum) return new obj.constructor(obj);

      // Check for circular references
      if (visited.has(obj)) return visited.get(obj);

      switch (type) {
        case ArrayBufferType: return new Int8Array(new Int8Array(obj)).buffer;
        case DataViewType: return new DataView(new Int8Array(new Int8Array(obj.buffer)).buffer);
        case SymbolType: return Symbol(obj.description);
        case ArrayType: {
          let tempArray = new Array();
          visited.set(obj, tempArray);
          for (const item of obj) tempArray.push(clone(item, visited));
          visited.delete(obj);
          return tempArray;
        }
        case SetType: {
          let tempSet = new Set();
          visited.set(obj, tempSet);
          for (const item of obj) tempSet.add(clone(item, visited));
          visited.delete(obj);
          return tempSet;
        }
        case MapType: {
          let tempMap = new Map()
          visited.set(obj, tempMap);
          for (const [key, value] of obj.entries()) {
            tempMap.set(clone(key, visited), clone(value, visited));
          }
          visited.delete(obj);
          return tempMap;
        }
        case ObjectType: {
          let tempObj: any = {}
          visited.set(obj, tempObj);
          Object.keys(obj).forEach((key) => {
            tempObj[key] = clone(obj[key], visited);
          });
          visited.delete(obj);
          return tempObj;
        }
      }
      return obj;
    }
    return clone(obj)
  }
  /**
   * Compare two objects for equality.(比较两对象是否相等)
   * @param {any} obj1 Object to be compared 1.(需要比较的对象1)
   * @param {any} obj2 Object to be compared 2.(需要比较的对象2)
   * @example
   * // Supported types: primitive types, TypedArray, Array, Set, Map, Object, ArrayBuffer, DataView, Date,RegExp, 
   * //                  Symbol(Compare their descriptions), Proxy(Will be treated like an object, Interceptors cannot be compared)
   * // Note: Unsupported types, such as Function, WeakRef, WeakSet, WeakMap, etc., will directly compare their reference addresses.
   * 
   * // 支持的类型：原始类型、TypedArray、Array、Set、Map、Object、ArrayBuffer、DataView、Date、
   * //             RegExp、Symbol(比较其description)、Proxy（将被视为对象，拦截器无法比较）
   * // 注意：不支持的类型，例如：Function、WeakRef、WeakSet、WeakMap等会直接比较其引用地址
   */
  static isEqual(obj1: any, obj2: any): boolean {
    let that = this
    function compare(obj1: any, obj2: any, visited1 = new Set(), visited2 = new Set()):boolean {
      if (obj1 === obj2) return true;
      let type1 = that.type(obj1), type2 = that.type(obj2);
      if (type1 !== type2) return false;
      if (type1 in NumericTypeEnum || type1 === SymbolType) return obj1.valueOf().toString() === obj2.valueOf().toString();
      if (type1 === ArrayBufferType) return new Int8Array(obj1).toString() === new Int8Array(obj2).toString();
      if (type1 === DataViewType) return new Int8Array(obj1.buffer).toString() === new Int8Array(obj2.buffer).toString();

      if (visited1.has(obj1) || visited2.has(obj2)) return true;
      visited1.add(obj1);
      visited2.add(obj2);
      let result = false;
      switch (type1) {
        case ArrayType:
          result = obj1.length === obj2.length
          if (result === true) {
            for (let i = 0; i < obj2.length; i++)
              if (compare(obj1[i], obj2[i], visited1, visited2) === false) {
                result = false;
                break;
              }
          }
          break;
        case SetType:
        case MapType:
          result = that.argToKey(obj1) === that.argToKey(obj2);
          break;
        case ObjectType:
          let keys1 = Object.keys(obj1).sort(), keys2 = Object.keys(obj2).sort();
          result = compare(keys1, keys2)
          if (result === true) {
            for (const key of keys1) {
              if (compare(obj1[key], obj2[key], visited1, visited2) === false) {
                result = false
                break;
              }
            }
          }
          break;
      }
      visited1.delete(obj1)
      visited2.delete(obj2)
      return result;
    }
    return compare(obj1, obj2)
  }

  // 支持的类型：原始类型，TypedArray，Array,Set，Map，Object，Function，Date,RegExp
  // arraybuffer,dataview,weakref(按照引用类型)，proxy（按照代理的类型）
  static argToKey(arg: any, visited = new WeakSet<any>()): string {
    let type = Object.prototype.toString.call(arg).split(" ")[1].slice(0, -1);
    if (visited.has(arg)) return "[Circular Reference]";
    if (type in NumericTypeEnum || type === FunctionType) return arg.toString();
    switch (type) {
      case ArrayBufferType:
        return new Int8Array(arg).toString();
      case DataViewType:
        return new Int8Array(arg.buffer).toString();
      case WeakRefType:
        return type + ":{" + this.argToKey(arg.deref(), visited) + "}";
      case ObjectType: {
        visited.add(arg);
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
        return "{" + argList.join(":") + "}";
      }
      case ArrayType:
      case SetType: {
        visited.add(arg);
        let strList: string[] = [];
        for (let item of arg) strList.push(this.argToKey(item, visited));
        if (type === SetType) strList.sort();
        visited.delete(arg);
        return type + ":[" + strList.join(",") + "]";
      }
      case MapType: {
        visited.add(arg);
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
        return type + ":{" + argList.join(":") + "}";
      }
    }
    return String(arg);
  }
}

enum NumericTypeEnum {
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
  RegExp = "RegExp",
}
const ArrayType = "Array";
const SetType = "Set";
const MapType = "Map";
const ObjectType = "Object";
const ArrayBufferType = "ArrayBuffer";
const DataViewType = "DataView";
const FunctionType = "Function";
const WeakRefType = "WeakRef";
const SymbolType = 'Symbol';

// 无需处理的属性
// "Proxy" | "Promise" | "WeakMap"| "WeakSet"

// todo
// 1.高性能深拷贝：proxy的实现
// 2.array，去重