/*
 * @Description: Some common regular expression patterns.(一些常见的正则表达式规则)
 * @Author: JunLiangWang
 * @Date: 2024-02-23 20:49:02
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-02-27 22:08:29
 */

/**
 * Some common regular expression patterns.(一些常见的正则表达式规则)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.RegRules.IDCardRule.test('12948392023');
 * 
 * // -------- Import on Demand(按需引入)
 * const { RegRules } = require('boots-js/reg-rules'); // Node
 * import { RegRules } from 'boots-js/reg-rules' // Es6 Module
 * RegRules.IDCardRule.test('12948392023');
 *  ```
 */
export class RegRules {
    /**
     * Matches any digit from 0 to 9.(仅匹配数字的正则表达式)
     * @example
     * RegRules.digitsRule.test('18523127384') //true
     */
    static get digitsRule(): RegExp {
        return /^\d+$/
    }
    /**
     * Matches any letter, both lowercase and uppercase.(仅匹配字母的正则表达式)
     * @example
     * RegRules.lettersRule.test('aaaa') //true
     */
    static get lettersRule(): RegExp {
        return /^[a-zA-Z]+$/
    }
    /**
     * Matches any lowercase letter.(仅匹配小写字母的正则表达式)
     * @example
     * RegRules.lowercaseLettersRule.test('aaaa') //true
     */
    static get lowercaseLettersRule(): RegExp {
        return /^[a-z]+$/
    }
    /**
     * Matches any uppercase letter.(仅匹配大写字母的正则表达式)
     * @example
     * RegRules.uppercaseLettersRule.test('ABC') //true
     */
    static get uppercaseLettersRule(): RegExp {
        return /^[A-Z]+$/
    }
    /**
     * Matches any letter or digit.(仅匹配字母或数字的正则表达式)
     * @example
     * RegRules.digitsAndLettersRule.test('134Afsv') //true
     */
    static get digitsAndLettersRule(): RegExp {
        return /^[a-zA-Z0-9]+$/
    }
    /**
     * Matches chinese Identity Card Number.(匹配身份证号码的正则表达式)
     * @example
     * RegRules.chineseIDCardRule.test('52052219830823283x') //true
     */
    static get chineseIDCardRule(): RegExp {
        return /\b(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)$)\b/
    }
    /**
     * Matches Chinese Mobile Phone Number.(匹配中国手机号码的正则表达式)
     * @example
     * RegRules.chinesePhoneNumberRule.test('18523127384') //true
     */
    static get chinesePhoneNumberRule(): RegExp {
        return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
    }
    /**
     * Matches email address.(匹配电子邮箱的正则表达式)
     * @example
     * RegRules.emailRule.test('wjl@gmail.com') //true
     */
    static get emailRule(): RegExp {
        return /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/
    }
    /**
     * Matches IP address.(匹配IP地址的正则表达式)
     * @example
     * RegRules.IPAddressRule.test('192.168.0.1') //true
     */
    static get IPAddressRule(): RegExp {
        return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    }
    /**
     * Matches file extensions of images.(匹配文件后缀为图片的正则表达式)
     * @example
     * RegRules.imageRule.test('test.png') //true
     */
    static get imageRule(): RegExp {
        return /\.(jpg|jpeg|png|gif|bmp|avif|webp|svg)$/
    }
    /**
     * Matches file extensions of audio.(匹配文件后缀为音频的正则表达式)
     * @example
     * RegRules.audioRule.test('test.mp3') //true
     */
    static get audioRule(): RegExp {
        return /\.(mp3|wav|flac|aac|ogg|wma)$/
    }
    /**
     * Matches file extensions of video.(匹配文件后缀为视频的正则表达式)
     * @example
     * RegRules.videoRule.test('test.mp4') //true
     */
    static get videoRule(): RegExp {
        return /\.(mp4|mov|avi|mkv|wmv|webm)$/
    }

}