/*
 * @Description: Some common regular expression patterns.(一些常见的正则表达式规则)
 * @Author: JunLiangWang
 * @Date: 2024-02-23 20:49:02
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-04-15 16:37:19
 */

/**
 * Matches any digit from 0 to 9.(仅匹配数字的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.digitsRule.test('18523127384') //true
 */
export const digitsRule = /^\d+$/
/**
 * Matches any letter, both lowercase and uppercase.(仅匹配字母的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.lettersRule.test('aaaa') //true
 */
export const lettersRule = /^[a-zA-Z]+$/
/**
 * Matches any lowercase letter.(仅匹配小写字母的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.lowercaseLettersRule.test('aaaa') //true
 */
export const lowercaseLettersRule = /^[a-z]+$/
/**
 * Matches any uppercase letter.(仅匹配大写字母的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.uppercaseLettersRule.test('ABC') //true
 */
export const uppercaseLettersRule = /^[A-Z]+$/
/**
 * Matches any letter or digit.(仅匹配字母或数字的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.digitsAndLettersRule.test('134Afsv') //true
 */
export const digitsAndLettersRule = /^[a-zA-Z0-9]+$/
/**
 * Matches chinese Identity Card Number.(匹配身份证号码的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.chineseIDCardRule.test('52052219830823283x') //true
 */
export const chineseIDCardRule = /\b(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)$)\b/
/**
 * Matches Chinese Mobile Phone Number.(匹配中国手机号码的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.chinesePhoneNumberRule.test('18523127384') //true
 */
export const chinesePhoneNumberRule = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
/**
 * Matches email address.(匹配电子邮箱的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.emailRule.test('wjl@gmail.com') //true
 */
export const emailRule = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/
/**
 * Matches IP address.(匹配IP地址的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.IPAddressRule.test('192.168.0.1') //true
 */
export const IPAddressRule = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
/**
 * Matches file extensions of images.(匹配文件后缀为图片的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.imageRule.test('test.png') //true
 */
export const imageRule = /\.(jpg|jpeg|png|gif|bmp|avif|webp|svg)$/
/**
 * Matches file extensions of audio.(匹配文件后缀为音频的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.audioRule.test('test.mp3') //true
 */
export const audioRule = /\.(mp3|wav|flac|aac|ogg|wma)$/
/**
 * Matches file extensions of video.(匹配文件后缀为视频的正则表达式)
 * @example
 * const  RegRules  = require('boots-js/reg-rules'); // Node
 * import * as RegRules  from 'boots-js/reg-rules' // Es6 Module
 * 
 * RegRules.videoRule.test('test.mp4') //true
 */
export const videoRule = /\.(mp4|mov|avi|mkv|wmv|webm)$/