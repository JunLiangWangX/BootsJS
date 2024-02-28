/*
 * @Description: Some methods of processing strings.(一些处理字符串的方法)
 * @Author: JunLiangWang
 * @Date: 2024-02-28 15:00:37
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-02-28 15:24:52
 */

/**
 * Some methods of processing strings.(一些处理字符串的方法)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS = from 'boots-js' // Es6 Module
 * BootsJS.StringTool.dashNameToUpperCamelCaseName('string-tool')
 * 
 * // -------- Import on Demand(按需引入)
 * const { StringTool } = require('boots-js/string-tool'); // Node
 * import { StringTool } = from 'boots-js/string-tool' // Es6 Module
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
}