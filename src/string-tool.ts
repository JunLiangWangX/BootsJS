/*
 * @Description: Some methods of processing strings.(一些处理字符串的方法)
 * @Author: JunLiangWang
 * @Date: 2024-02-28 15:00:37
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-04-16 11:34:17
 */

/**
 * @enum Trim options enum.(去除空格选项枚举)   
 *    - `all`: Remove all spaces from string. (去除字符串中所有空格)
 *    - `side`: Remove leading and trailing spaces from string. (去除字符串左右两端空格)
 *    - `leading`: Remove spaces leading spaces from string. (去除字符串前导空格)
 *    - `trailing`: Remove spaces trailing spaces from string. (去除字符串尾部空格)
 */
export enum TrimOptions {
  /**
   * Remove all spaces from string. (去除字符串中所有空格)
   */
  all,
  /**
   * Remove leading and trailing spaces from string. (去除字符串左右两端空格)
   */
  side,
  /**
   * Remove spaces leading spaces from string. (去除字符串前导空格)
   */
  leading,
  /**
   * Remove spaces trailing spaces from string. (去除字符串尾部空格)
   */
  trailing
}
/**
 * Convert dash naming to camel case naming.(短横线命名转大写驼峰命名)
 * @param {string} dashName The dash name that needs to be converted.(需要转换的短横线名称)
 * @example 
 * const  StringTool  = require('boots-js/string-tool'); // Node
 * import * as StringTool  from 'boots-js/string-tool' // Es6 Module
 * 
 * StringTool.dashNameToUpperCamelCaseName('string-tool') //StringTool
 */
export function dashNameToUpperCamelCaseName(dashName: string): string {
  return dashName.replace(/-([a-zA-Z])/g, function (match, letter) {
    return letter.toUpperCase();
  }).replace(/^[a-z]/, function (letter) {
    return letter.toUpperCase();
  });
}
/**
 * Convert camel case naming to dash naming.(驼峰命名转短横线命名)
 * @param {string} camelCaseName The camel case name that needs to be converted.(需要转换的驼峰命名)
 * @example 
 * const  StringTool  = require('boots-js/string-tool'); // Node
 * import * as StringTool  from 'boots-js/string-tool' // Es6 Module
 * 
 * StringTool.camelCaseNameToDashName('StringTool') //string-tool
 */
export function camelCaseNameToDashName(camelCaseName: string): string {
  return camelCaseName.replace(/^[A-Z]/, function (letter) {
    return letter.toLowerCase();
  }).replace(/[A-Z]/g, function (letter) {
    return '-' + letter.toLowerCase();
  });
}
/**
 * Remove spaces from string.(去除字符串中的空格)
 * @param {string} str  A string that needs to be remove spaces.(需要去除空格的字符串)
 * @param {TrimOptions} trimOptions Trim options，default is all.(去除空格选项，默认为all) 
 *    - `all`: Remove all spaces from string. (去除字符串中所有空格)
 *    - `side`: Remove leading and trailing spaces from string. (去除字符串左右两端空格)
 *    - `leading`: Remove spaces leading spaces from string. (去除字符串前导空格)
 *    - `trailing`: Remove spaces trailing spaces from string. (去除字符串尾部空格)
 * @example
 * const  StringTool  = require('boots-js/string-tool'); // Node
 * import * as StringTool  from 'boots-js/string-tool' // Es6 Module
 * 
 * StringTool.trim(' String Tool ')                               //StringTool
 * StringTool.trim(' StringTool ',StringTool.trimOptions.side)    //StringTool
 * StringTool.trim('StringTool ',StringTool.trimOptions.trailing) //StringTool
 * StringTool.trim(' StringTool',StringTool.trimOptions.leading)  //StringTool
 */
export function trim(str: string, trimOptions: TrimOptions = TrimOptions.all): string {
  if (!checkIsString(str)) {
    console.warn(`${str}非字符串！`)
    return str
  }
  switch (trimOptions) {
    case TrimOptions.all:
      return str.replace(/\s/g, '');
    case TrimOptions.side:
      return str.trim();
    case TrimOptions.leading:
      return str.replace(/^\s+/, '');
    case TrimOptions.trailing:
      return str.replace(/\s+$/, '');
    default:
      throw new Error("Please pass in the correct TrimOptions parameters");
  }
}
function checkIsString(str: any): boolean {
  if (typeof str === "string") {
    return true
  }

  return false
}

export default {
  TrimOptions,
  dashNameToUpperCamelCaseName,
  camelCaseNameToDashName,
  trim
}