/**
 * utils for improve performance.(一些提升性能的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js/cjs'); // CommandJS
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.PerformanceUtils.debounce(test);
 * 
 * // -------- Import on Demand(按需引入)
 * const  PerformanceUtils  = require('boots-js/cjs/performance-utils'); // CommandJS
 * import PerformanceUtils  from 'boots-js/performance-utils' // Es6 Module
 * PerformanceUtils.debounce(test);
 *  ```
 * @module
 */

import { argToStrKey } from "./object-utils";
/**
 * Debounce function.(防抖函数)
 * @param {Function} func Functions that require debounce.(需要防抖的函数)
 * @param {number} delay Delay，default 300ms.(延迟时间，默认300ms)
 * @param {boolean} isImmediate Whether to execute the function immediately,Default false.(是否立即执行函数，默认否)
 * @example 
 * const  PerformanceUtils  = require('boots-js/cjs/performance-utils'); // CommandJS
 * import PerformanceUtils  from 'boots-js/performance-utils' // Es6 Module
 * 
 * let num=0
 * function add(nv){
 *    num+=nv
 * }
 * const debounceAdd=PerformanceUtils.debounce(add);
 * debounceAdd(1);
 * debounceAdd(1);
 * debounceAdd(1);
 * console.info(num); // 1
 */
export function debounce(func: Function, delay: number = 300, isImmediate: boolean = false): Function {
  let timeoutId: NodeJS.Timeout | undefined;

  return function (this: any, ...args: any) {
    if (isImmediate) !timeoutId && func.apply(this, args);
    else clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (isImmediate) timeoutId = undefined
      else func.apply(this, args);
    }, delay);
  };
}
/**
 * Throttle function.(节流函数)
 * @param {Function} func Functions that require debounce.(需要防抖的函数)
 * @param {number} delay  Delay，default 300ms.(延迟时间，默认300ms)
 * @example
 * const  PerformanceUtils  = require('boots-js/cjs/performance-utils'); // CommandJS
 * import PerformanceUtils  from 'boots-js/performance-utils' // Es6 Module
 * 
 * let num=0
 * function add(nv){
 *    num+=nv
 * }
 * const throttleAdd=PerformanceUtils.throttle(add);
 * throttleAdd(1);
 * throttleAdd(1);
 * throttleAdd(1);
 * console.info(num); // 1
 */
export function throttle(func: Function, delay: number = 300): Function {
  let previous: number = 0;
  return function (this: any, ...args: any) {
    const now = new Date().getTime();
    if (now - previous > delay) {
      func.apply(this, args)
      previous = now
    }
  }
}
/**
 * Caching function calculation results.(缓存函数的计算结果)
 * @param {Function} func Functions that require cache.(需要缓存的函数)
 * @param {MemoizeOptions} options An object specifying the caching options.(指定缓存选项的对象)
 *    - maxCacheSize: The maximum number of cached items allowed. Defaults to Infinity. (缓存的最大数量。默认为 Infinity)
 *    - expirationTime: The time in milliseconds after which a cached item expires. Defaults to Infinity. (缓存项过期时间，以毫秒为单位。默认为 Infinity)
 * @example
 * const  PerformanceUtils  = require('boots-js/cjs/performance-utils'); // CommandJS
 * import PerformanceUtils  from 'boots-js/performance-utils' // Es6 Module
 * 
 * let count=0
 * function addCount(nv){
 *    count+=nv;
 *    return count 
 * }
 * const memoizeAdd=PerformanceUtils.memoize(addCount,{
 *    expirationTime:2000
 * })
 * memoizeAdd(1);memoizeAdd(1);memoizeAdd(1);
 * console.info(count)  //1
 * memoizeAdd(2);memoizeAdd(2);memoizeAdd(2);
 * console.info(count)  //3
 */
export function memoize(func: Function, options: MemoizeOptions = {
  maxCacheSize: Infinity,
  expirationTime: Infinity
}): Function {
  const cache: Map<string, CacheItem> = new Map();
  const { maxCacheSize = Infinity, expirationTime = Infinity } = options;

  return function (this: any, ...args: any[]) {
    const key = args.map(arg => argToStrKey(arg)).join('-');
    const cachedItem = cache.get(key);
    if (cachedItem) {
      if (Date.now() - cachedItem.timestamp > expirationTime) cache.delete(key);
      else return cachedItem.result;
    }

    const result = func.apply(this, args);

    const newCacheItem = {
      result,
      timestamp: Date.now()
    };

    cache.set(key, newCacheItem);

    if (cache.size > maxCacheSize) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    return result;
  };
}
/**
 * cache options object(缓存选项对象)
 */
interface MemoizeOptions {
  maxCacheSize: number,
  expirationTime: number
}
/**
 * cache item object(缓存项对象)
 */
interface CacheItem {
  result: any,
  timestamp: number
}


/**
 * @ignore
 */
export default {
  debounce,
  throttle,
  memoize
}