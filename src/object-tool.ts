/*
 * @Description: Some tools for working with Object.(一些处理对象的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-21 20:15:10
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-04-16 11:22:51
 */

/**
 * Determine parameter type.(判断给定参数类型)
 * @param {*} obj Need to determine the type of value.(需要判断类型的值)
 * @example
 * const  ObjectTool  = require('boots-js/object-tool'); // Node
 * import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
 * 
 * ObjectTool.type(new Array()); //'Array'
 * ObjectTool.type('123'); //'String'
 * ObjectTool.type(true); //'Boolean'
 * ObjectTool.type(new Map()); //'Map'
 */
export function type(obj: any): string {
  return Object.prototype.toString.call(obj).split(" ")[1].slice(0, -1);
}
/**
 * Deep clone object.(深度拷贝对象)
 * @param {any} obj Value to be copied.(需要拷贝的值)
 * @example
 * // Supported types: primitive types, TypedArray, Array, Set, Map, Object, ArrayBuffer, DataView, Date,RegExp, Symbol, Proxy(Will be treated like an object, interceptors cannot be copied)
 * // Notice:Unsupported types, such as Function, WeakRef, WeakSet, WeakMap, etc., will directly copy their references.
 * 
 * // 支持的类型：原始类型、TypedArray、Array、Set、Map、Object、ArrayBuffer、DataView、Date、RegExp、Symbol、Proxy（将被视为对象，拦截器无法复制）
 * // 注意：不支持的类型，例如：Function、WeakRef、WeakSet、WeakMap等会直接复制其引用
 * 
 * const  ObjectTool  = require('boots-js/object-tool'); // Node
 * import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
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
export function deepClone(obj: any): any {
  function clone(obj: any, visited = new Map()): any {
    let objType = type(obj);
    if (objType in NumericTypeEnum) return new obj.constructor(obj);

    // Check for circular references
    if (visited.has(obj)) return visited.get(obj);

    switch (objType) {
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
 * // Supported types: primitive types, TypedArray, Array, Set, Map, Object, ArrayBuffer, DataView, Date,RegExp, Symbol(Compare their descriptions), Proxy(Will be treated like an object, Interceptors cannot be compared)
 * // Note: Unsupported types, such as Function, WeakRef, WeakSet, WeakMap, etc., will directly compare their reference addresses.
 * 
 * // 支持的类型：原始类型、TypedArray、Array、Set、Map、Object、ArrayBuffer、DataView、Date、RegExp、Symbol(比较其description)、Proxy（将被视为对象，拦截器无法比较）
 * // 注意：不支持的类型，例如：Function、WeakRef、WeakSet、WeakMap等会直接比较其引用地址
 * 
 * const  ObjectTool  = require('boots-js/object-tool'); // Node
 * import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
 * 
 * const testObj2={
 *     BigInt64Array:new BigInt64Array([BigInt(123),BigInt(123),BigInt(123)]),
 *     RegExp:/1234/,
 *     Array:new Array(...[obj1,obj2,obj3,obj4]),
 *     Set:new Set([obj1,obj2,obj3,obj4]),
 *     Object:obj4,
 *     Map:map2,
 *     Date:date,
 *     ArrayBuffer:new ArrayBuffer(10),
 *     DataView:new DataView(new ArrayBuffer(10)),
 * }
 * 
 * ObjectTool.isEqual(testObj2,ObjectTool.deepClone(testObj2)) //true
 * let testObj5=ObjectTool.deepClone(testObj2)
 * testObj5.Object.obj1.String='12344'
 * ObjectTool.isEqual(testObj2,testObj5)  //false
 */
export function isEqual(obj1: any, obj2: any): boolean {
  function compare(obj1: any, obj2: any, visited1 = new Set(), visited2 = new Set()): boolean {
    if (obj1 === obj2) return true;
    let type1 = type(obj1), type2 = type(obj2);
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
        result = argToStrKey(obj1) === argToStrKey(obj2);
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
/**
 * Convert parameters to String as unique key.(将参数转换为String作为唯一key)
 * @param {any} arg Parameters that need to be converted.(需要转换的参数)
 * @example 
 * // Supported types: primitive types, TypedArray, Array, Set, Map, Object, ArrayBuffer, DataView, Date,RegExp, Symbol(Compare their descriptions), Proxy(Will be treated like an object, Interceptors cannot be compared)
 * // Note: Unsupported types, such as WeakRef, WeakSet, WeakMap, etc., will directly output the type.
 * 
 * // 支持的类型：原始类型、TypedArray、Array、Set、Map、Object、ArrayBuffer、Function、DataView、Date、 RegExp、Symbol、Proxy（将被视为对象，拦截器无法输出）
 * // 注意：不支持的类型，例如：WeakRef、WeakSet、WeakMap等会直接输出类型
 * 
 * const  ObjectTool  = require('boots-js/object-tool'); // Node
 * import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
 * 
 * const testObj2={
 *     BigInt64Array:new BigInt64Array([BigInt(123),BigInt(123),BigInt(123)]),
 *     RegExp:/1234/,
 *     Array:new Array(...[obj1,obj2,obj3,obj4]),
 *     Set:new Set([obj1,obj2,obj3,obj4]),
 *     Object:obj4,
 *     Map:map2,
 *     Date:date,
 *     ArrayBuffer:new ArrayBuffer(10),
 *     DataView:new DataView(new ArrayBuffer(10)),
 * }
 * const testObj3={
 *     Array:new Array(...[obj1,obj2,obj3,obj4]),
 *     Set:new Set([obj1,obj2,obj3,obj4]),
 *     BigInt64Array:new BigInt64Array([BigInt(123),BigInt(123),BigInt(123)]),
 *     ArrayBuffer:new ArrayBuffer(10),
 *     Object:obj4,
 *     Map:map2,
 *     Date:date,
 *     DataView:new DataView(new ArrayBuffer(10)),
 *     RegExp:/1234/,
 * }
 * 
 * let testObj5=ObjectTool.deepClone(testObj2)
 * testObj5.Object.obj1.String='12344'
 * 
 * ObjectTool.argToStrKey(testObj2)===ObjectTool.argToStrKey(testObj3) //true
 * ObjectTool.argToStrKey(testObj2)===ObjectTool.argToStrKey(testObj5) //false
 */
export function argToStrKey(arg: any): string {
  function generateKey(arg: any, visited = new Set()): string {
    let objType = type(arg);
    if (visited.has(arg)) return "[Circular Reference]";
    if (objType in NumericTypeEnum || objType === FunctionType || objType === SymbolType) return arg.toString();
    switch (objType) {
      case ArrayBufferType:
        return new Int8Array(arg).toString();
      case DataViewType:
        return new Int8Array(arg.buffer).toString();
      /*case WeakRefType:
        return type + ":{" + generateKey(arg.deref(), visited) + "}";*/
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
          argList.push(generateKey(arg[item], visited));
        }
        visited.delete(arg);
        return "{" + argList.join(":") + "}";
      }
      case ArrayType:
      case SetType: {
        visited.add(arg);
        let strList: string[] = [];
        for (let item of arg) strList.push(generateKey(item, visited));
        if (objType === SetType) strList.sort();
        visited.delete(arg);
        return type + ":[" + strList.join(",") + "]";
      }
      case MapType: {
        visited.add(arg);
        let sortArray: string[] = [];
        let keyMap = new Map();
        let argList: string[] = [];
        for (const key of arg.keys()) {
          let genKey = generateKey(key, visited);
          sortArray.push(genKey);
          keyMap.set(genKey, arg.get(key));
        }
        sortArray.sort();
        for (let item of sortArray) {
          argList.push(item);
          argList.push(generateKey(keyMap.get(item), visited));
        }
        visited.delete(arg);
        return type + ":{" + argList.join(":") + "}";
      }
    }
    return String(arg);
  }
  return generateKey(arg)
}

/**
 * Deep merge obj2 to obj1.(深度合并obj2到obj1)
 * @param {any} obj1 
 * @param {any} obj2
 * @param {*} arrayMergeModeEnum Array merging mode.(数组合并模式)
 *    - ReplaceMerge: Replace merge, directly use the left array，this value is the default.(替换合并，直接使用左边数组，该值为默认值)
 *    - IncrementalMerge: Incremental merging, array splicing merging.(增量合并，数组拼接合并)
 *    - CompareMerge: Compare merge, Deeply compare the contents of two arrays and merge them.(比较合并，深度比较两数组内容合并)
 * @example
 * // Note: Comparing reference types during merging is based on address comparison, not usage value comparison!
 * // 注意：合并中比较引用类型都是进行地址比对，并未对使用值比对！
 * 
 * const  ObjectTool  = require('boots-js/object-tool'); // Node
 * import * as ObjectTool  from 'boots-js/object-tool' // Es6 Module
 * 
 * // ReplaceMerge(替换合并)
 * ObjectTool.deepMerge([1,2,3],[4,5,6]) // [1,2,3]
 * // IncrementalMerge(增量合并)
 * ObjectTool.deepMerge([1,2,3],[3,4],ObjectTool.ArrayMergeModeEnum.IncrementalMerge) // [1,2,3,3,4]
 * // CompareMerge(比较合并)
 * ObjectTool.deepMerge([1,2,3],[3,4],ObjectTool.ArrayMergeModeEnum.CompareMerge)     // [1,2,3,4]
 *  
 */
export function deepMerge(obj1: any, obj2: any, arrayMergeModeEnum = ArrayMergeModeEnum.ReplaceMerge): any {
  function mergeTypedArray(typeArray1: Int8Array, typeArray2: Int8Array): Array<number> {
    let arr1 = Array.from(typeArray1), arr2 = Array.from(typeArray2)
    if (arrayMergeModeEnum === ArrayMergeModeEnum.CompareMerge) {
      arr2.forEach((val: any) => {
        if (!arr1.includes(val)) arr1.push(val)
      })
      return arr1
    }
    else return arr1.concat(arr2)
  }
  function recursion(obj1: any, obj2: any, visited1 = new WeakSet(), visited2 = new WeakSet()) {
    if (obj1 === obj2) return obj1;
    const type1 = type(obj1), type2 = type(obj2);
    if (type1 !== type2
      || type1 === NumericTypeEnum.Date
      || type1 === NumericTypeEnum.RegExp
    ) return obj1;
    if (type1 in NumericTypeEnum && arrayMergeModeEnum !== ArrayMergeModeEnum.ReplaceMerge) {
      let mergeArr = mergeTypedArray(obj1, obj2)
      obj1 = new obj1.constructor(mergeArr)
    }
    if (visited1.has(obj1) || visited2.has(obj2)) return obj1;
    visited1.add(obj1);
    visited2.add(obj2);
    switch (type1) {
      case ArrayType:
        if (arrayMergeModeEnum === ArrayMergeModeEnum.IncrementalMerge) {
          obj1 = obj1.concat(obj2)
        }
        else if (arrayMergeModeEnum === ArrayMergeModeEnum.CompareMerge) {
          obj2.forEach((val: any) => {
            if (!obj1.includes(val)) obj1.push(val)
          })
        }
        break;
      case ObjectType:
        Object.keys(obj2).forEach((key: string) => {
          if (key in obj1) obj1[key] = recursion(obj1[key], obj2[key])
          else obj1[key] = obj2[key]
        })
        break;
      case MapType:
        for (let key of obj2.keys()) {
          if (obj1.has(key)) obj1.set(key, recursion(obj1.get(key), obj2.get(key)))
          else obj1.set(key, obj2.get(key))
        }
        break;
      case SetType:
        obj1 = new Set([...obj1, ...obj2]);
        break;
      case ArrayBufferType:
        if (arrayMergeModeEnum !== ArrayMergeModeEnum.ReplaceMerge)
          obj1 = new Int8Array(mergeTypedArray(new Int8Array(obj1), new Int8Array(obj2))).buffer
        break;
      case DataViewType:
        if (arrayMergeModeEnum !== ArrayMergeModeEnum.ReplaceMerge)
          obj1 = new DataView(new Int8Array(mergeTypedArray(new Int8Array(obj1.buffer), new Int8Array(obj2.buffer))).buffer)
        break;
    }
    visited1.delete(obj1)
    visited2.delete(obj2)
    return obj1
  }
  return recursion(obj1, obj2)
}
/**
 *  Array merge mode enum.(数组合并模式枚举)
 *    - `IncrementalMerge`: Incremental merging, array splicing merging.(增量合并，数组拼接合并)
 *    - `ReplaceMerge`: Replace  merge, directly use the left array.(替换合并，直接使用左边数组)
 *    - `CompareMerge`: Compare merge, Deeply compare the contents of two arrays and merge them.(比较合并，深度比较两数组内容合并)
 */
export enum ArrayMergeModeEnum {
  /**
   * Incremental merging, array splicing merging.(增量合并，数组拼接合并)
   */
  IncrementalMerge,
  /**
   * Replace  merge, directly use the left array.(替换合并，直接使用左边数组)
   */
  ReplaceMerge,
  /**
   * Compare merge, Deeply compare the contents of two arrays and merge them.(比较合并，深度比较两数组内容合并)
   */
  CompareMerge

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
const SymbolType = 'Symbol';