/*
 * @Description: Some tools for working with date and time(一些处理日期时间的工具)
 * @Author: JunLiangWang
 * @Date: 2024-02-26 10:36:11
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-02-26 21:33:09
 */

/**
 * DateUnitEnum(日期单位枚举)
 */
enum DateUnitEnum {
  all,
  year,
  month,
  day,
  hour,
  minute,
  second
}
/**
 * DateTime Object(日期时间对象)
 */
interface DateTime {
  years: number,
  months: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}
/**
 * Some tools for working with date and time(一些处理日期时间的工具)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js'); // Node
 * import BootsJS = from 'boots-js' // Es6 Module
 * BootsJS.DateTool.dateFormater(new Date(),'YYYY-MM-DD hh:mm:ss');
 * 
 * // -------- Import on Demand(按需引入)
 * const { DateTool } = require('boots-js/date-tool'); // Node
 * import { DateTool } = from 'boots-js/date-tool' // Es6 Module
 * DateTool.dateFormater(new Date(),'YYYY-MM-DD hh:mm:ss');
 *  ```
 */
export class DateTool {
  /**
   * Date unit enum.(日期单位枚举)
   */
  static dateUnitEnum = DateUnitEnum;
  /**
   * @description: Format date and time.(格式化日期与时间)
   * @param {string|number|Date} date Specify date and time, support timestamp/date character/Date object, default is current date.(指定日期时间，支持时间戳/日期字符/Date对象，默认为当前日期)
   * @param {string} formater Specify the date and time format, default is YYYY-MM-DD hh:mm:ss.(指定日期和时间的格式，默认为YYYY-MM-DD hh:mm:ss)
   */
  static dateFormater(date: string | number | Date = new Date(), formater: string = 'YYYY-MM-DD hh:mm:ss'): String {
    let tempDate = date ? new Date(date) : new Date(),
      year = tempDate.getFullYear(),
      month = (tempDate.getMonth() + 1),
      day = tempDate.getDate(),
      hour = tempDate.getHours(),
      minute = tempDate.getMinutes(),
      second = tempDate.getSeconds()

    return formater
      .replace(/YYYY/g, year.toString())
      .replace(/YY/g, year.toString().substr(2, 2))
      .replace(/MM/g, (month < 10 ? '0' : '') + month)
      .replace(/DD/g, (day < 10 ? '0' : '') + day)
      .replace(/hh/g, (hour < 10 ? '0' : '') + hour)
      .replace(/mm/g, (minute < 10 ? '0' : '') + minute)
      .replace(/ss/g, (second < 10 ? '0' : '') + second)
  }
  /**
   * @description: Determine whether a given date is a leap year.(给定年份判断是否闰年)
   * @param {number} year Specify the year.(指定年份)
   */
  static isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  /**
   * @description: Given a date, returns the total number of days in the month.(给定日期返回当月总天数)
   * @param {number} year Specify the year.(指定年份)
   * @param {number} month Specify the month, starting from 1.(指定月份，从1月开始)
   */
  static getDaysInMonth(year: number, month: number): number {
    if (month < 1 || month > 12) throw new Error("month out of range");
    const daysPerMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && this.isLeapYear(year)) return 29;
    return daysPerMonth[month];
  }
  /**
   * @description:Calculate the time between two dates.(计算两日期的相隔时间)
   * @param {string|number|Date} startDate Specify start date, support timestamp/date character/Date object, default is current date.(指定开始日期，支持时间戳/日期字符/Date对象，默认为当前日期)
   * @param {string|number|Date} endDate Specify end date, support timestamp/date character/Date object, default is current date.(指定结束日期，支持时间戳/日期字符/Date对象，默认为当前日期)
   * @param {DateUnit} unit Specify the calculation unit, default is days. (指定计算单位，默认为天)
   *    - `dateUnitEnum.all`: Returns the time difference in years, months, days, hours, minutes, and seconds. (返回年、月、日、小时、分钟和秒的时间差)
   *    - `dateUnitEnum.year`: Returns the time difference in years. (返回年的时间差)
   *    - `dateUnitEnum.month`: Returns the time difference in months. (返回月的时间差)
   *    - `dateUnitEnum.day`: Returns the time difference in days. (返回天的时间差)
   *    - `dateUnitEnum.hour`: Returns the time difference in hours. (返回小时的时间差)
   *    - `dateUnitEnum.minute`: Returns the time difference in minutes. (返回分钟的时间差)
   *    - `dateUnitEnum.second`: Returns the time difference in seconds. (返回秒的时间差)
   */
  static getDateDiff(startDate: string | number | Date = new Date(), endDate: string | number | Date = new Date(), unit: DateUnitEnum = DateUnitEnum.day): number | DateTime {
    const start = startDate ? new Date(startDate) : new Date(), end = endDate ? new Date(endDate) : new Date();
    if (end.getTime() < start.getTime()) throw new Error("The start date should be less than the end date");
    const diffSecond = end.getSeconds() - start.getSeconds(),
      diffMinute = end.getMinutes() - start.getMinutes() - (diffSecond < 0 ? 1 : 0),
      diffHour = end.getHours() - start.getHours() - (diffMinute < 0 ? 1 : 0),
      diffDay = end.getDate() - start.getDate() - (diffHour < 0 ? 1 : 0),
      diffMonth = end.getMonth() - start.getMonth() - (diffDay < 0 ? 1 : 0),
      diffYear = end.getFullYear() - start.getFullYear() - (diffMonth < 0 ? 1 : 0);
    switch (unit) {
      case DateUnitEnum.all:
        let endMonth = end.getMonth(), endYear = end.getFullYear()
        if (endMonth == 0) {
          endMonth = 12
          endYear -= endYear
        }
        return {
          years: diffYear,
          months: diffMonth < 0 ? diffMonth + 12 : diffMonth,
          days: diffDay < 0 ? diffDay + this.getDaysInMonth(endYear, endMonth) : diffDay,
          hours: diffHour < 0 ? diffHour + 24 : diffHour,
          minutes: diffMinute < 0 ? diffMinute + 60 : diffMinute,
          seconds: diffSecond < 0 ? diffSecond + 60 : diffSecond,
        }
      case DateUnitEnum.year:
        return diffYear
      case DateUnitEnum.month:
        return (diffMonth < 0 ? diffMonth + 12 : diffMonth) + diffYear * 12
      case DateUnitEnum.day:
        return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      case DateUnitEnum.hour:
        return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60))
      case DateUnitEnum.minute:
        return Math.floor((end.getTime() - start.getTime()) / (1000 * 60))
      case DateUnitEnum.second:
        return Math.floor((end.getTime() - start.getTime()) / (1000))
      default:
          throw new Error("Please enter unit as the correct enumeration type");
    }
  }
  /**
   * @description: Date Add/Subtract Calculator(日期加/减计算器)
   * @param {string|number|Date} startDate Specify start date, support timestamp/date character/Date object, default is current date.(指定开始日期，支持时间戳/日期字符/Date对象，默认为当前日期)
   * @param {DateTime} options An object specifying the amount of years, months, days, hours, minutes, and seconds to add/subtract from the start date. (包含要添加/减去的年、月、日、小时、分钟和秒数的对象)
 *    - years: Number of years to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的年数。正数表示添加，负数表示减去)
 *    - months: Number of months to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的月数。正数表示添加，负数表示减去)
 *    - days: Number of days to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的天数。正数表示添加，负数表示减去)
 *    - hours: Number of hours to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的小时数。正数表示添加，负数表示减去)
 *    - minutes: Number of minutes to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的分钟数。正数表示添加，负数表示减去)
 *    - seconds: Number of seconds to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的秒数。正数表示添加，负数表示减去)
   */  
  static dateCalculator(startDate: string | number | Date = new Date(), options: DateTime): Date {
    const start = startDate ? new Date(startDate) : new Date();
    const {
      years = 0,
      months = 0,
      days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0
    } = options;

    const newDate = new Date(start.getTime());
    newDate.setFullYear(start.getFullYear() + years);
    newDate.setMonth(start.getMonth() + months);
    newDate.setDate(start.getDate() + days);
    newDate.setHours(start.getHours() + hours);
    newDate.setMinutes(start.getMinutes() + minutes);
    newDate.setSeconds(start.getSeconds() + seconds);

    return newDate;
  }
}