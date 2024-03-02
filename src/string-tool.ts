/*
 * @Description: Some methods of processing strings.(一些处理字符串的方法)
 * @Author: JunLiangWang
 * @Date: 2024-02-28 15:00:37
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-02-28 16:46:26
 */

/**
 * Some methods of processing strings.(一些处理字符串的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.StringTool.dashNameToUpperCamelCaseName('string-tool')
 * 
 * // -------- Import on Demand(按需引入)
 * const { StringTool } = require('boots-js/string-tool'); // Node
 * import { StringTool } from 'boots-js/string-tool' // Es6 Module
 * StringTool.dashNameToUpperCamelCaseName('string-tool')
 *  ```
 */
export class StringTool{
    /**
     * @description: Convert dash naming to camel case naming.(短横线命名转大写驼峰命名)
     * @param {string} dashName The dash name that needs to be converted.(需要转换的短横线名称)
     * @example 
     * StringTool.dashNameToUpperCamelCaseName('string-tool') //StringTool
     */  
    static dashNameToUpperCamelCaseName(dashName:string):string {
        return dashName.replace(/-([a-zA-Z])/g, function (match, letter) {
          return letter.toUpperCase();
        }).replace(/^[a-z]/, function (letter) {
          return letter.toUpperCase();
        });
      }
    /**
     * @description: Convert camel case naming to dash naming.(驼峰命名转短横线命名)
     * @param {string} camelCaseName The camel case name that needs to be converted.(需要转换的驼峰命名)
     * @example 
     * StringTool.camelCaseNameToDashName('StringTool') //string-tool
     */    
    static camelCaseNameToDashName(camelCaseName:string):string {
        return camelCaseName.replace(/^[A-Z]/, function (letter) {
          return letter.toLowerCase();
        }).replace(/[A-Z]/g, function (letter) {
           return '-'+letter.toLowerCase();
        });
      }

    /**
     * @description: 判断是否是字符串
     * @param {any} str
     * @example 
     *  this.#checkIsString(' StringTool') // true
     *  this.#checkIsString(1) // false
     * @returns {boolean} 类型是否是字符串
     */ 

      static #checkIsString(str:unknown):str is string{
        if(typeof str === "string"){
          return true
        }

        return false
      }

     /**
     * @description: Remove the left space.(去除左边所有空格)
     * @param {string} trimLeftStr A string that needs to be remove all spaces on the left.(需要去除左边空格的字符串)
     * @example 
     *  StringTool.trimLeft(' StringTool') // StringTool
     * @returns {string} Returns a string that removes the left space (去除左边空格之后的字符) 
     */    
    static trimLeft(trimLeftStr:string):string {
      if(!this.#checkIsString(trimLeftStr)){
        console.warn(`${trimLeftStr}非字符串！`)
        return trimLeftStr
      }

      return trimLeftStr.replace(/^\s+/, '');
    }

     /**
     * @description: Remove the right space.(去除右边所有空格)
     * @param {string} trimRightStr A string that needs to be remove all spaces on the right.(需要去除右边空格的字符串)
     * @example 
     *  StringTool.trimRight('StringTool ') // StringTool
     * @returns {string} Returns a string that removes the left space (去除右边空格之后的字符) 
     */    
      static trimRight(trimRightStr:string):string {
        if(!this.#checkIsString(trimRightStr)){
          console.warn(`${trimRightStr}非字符串！`)
          return trimRightStr
        }

        return trimRightStr.replace(/\s+$/, '');
      }

     /**
     * @description: Remove the left space and right space.(去除左右所有空格)
     * @param {string} trimLeftAndRightStr A string that needs to be remove all spaces on the  both side.(需要去除边上空格的字符串)
     * @example 
     *  StringTool.trimLeftAndRightStr(' StringTool ') // StringTool
     * @returns {string} Returns a string that removes the both side space (去除左右两边空格之后的字符) 
     */    
      static trimSide(trimLeftAndRightStr:string):string {
        if(!this.#checkIsString(trimLeftAndRightStr)){
          console.warn(`${trimLeftAndRightStr}非字符串！`)
          return trimLeftAndRightStr
        }

        return trimLeftAndRightStr.trim();
      }

        /**
     * @description: Remove the all space(去除所有空格)
     * @param {string} trimAllStr A string that needs to be remove all spaces.(需要去除所有空格的字符串)
     * @example 
     *  StringTool.trimAllStr(' String Tool ') // StringTool
     * @returns {string} Returns a string that removes all space (去除所有空格之后的字符) 
     */    
      static trimAll(trimAllStr:string):string {
        if(!this.#checkIsString(trimAllStr)){
          console.warn(`${trimAllStr}非字符串！`)
          return trimAllStr
        }

        return trimAllStr.replace(/\s/g,'');
      }
}