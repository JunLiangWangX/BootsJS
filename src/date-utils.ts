/**
 * utils for working with date and time.(一些处理日期时间的工具)
 *
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js/cjs'); // CommandJS
 * import BootsJS from 'boots-js' // Es6 Module
 * BootsJS.DateUtils.dateFormater(new Date(),'YYYY-MM-DD HH:mm:ss');
 *
 * // -------- Import on Demand(按需引入)
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import DateUtils  from 'boots-js/date-utils' // Es6 Module
 * DateUtils.dateFormater(new Date(),'YYYY-MM-DD HH:mm:ss');
 *  ```
 * @module
 */
/**
 * @enum Date unit enum.(日期单位枚举)
 *    - `all`: Returns the time difference in years, months, days, hours, minutes, and seconds. (返回年、月、日、小时、分钟和秒的时间差)
 *    - `year`: Returns the time difference in years. (返回年的时间差)
 *    - `month`: Returns the time difference in months. (返回月的时间差)
 *    - `day`: Returns the time difference in days. (返回天的时间差)
 *    - `hour`: Returns the time difference in hours. (返回小时的时间差)
 *    - `minute`: Returns the time difference in minutes. (返回分钟的时间差)
 *    - `second`: Returns the time difference in seconds. (返回秒的时间差)
 */
export enum DateUnitEnum {
	/**
	 * Returns the time difference in years, months, days, hours, minutes, and seconds. (返回年、月、日、小时、分钟和秒的时间差)
	 */
	all,
	/**
	 * Returns the time difference in years. (返回年的时间差)
	 */
	year,
	/**
	 * Returns the time difference in months. (返回月的时间差)
	 */
	month,
	/**
	 * Returns the time difference in days. (返回天的时间差)
	 */
	day,
	/**
	 * Returns the time difference in hours. (返回小时的时间差)
	 */
	hour,
	/**
	 * Returns the time difference in minutes. (返回分钟的时间差)
	 */
	minute,
	/**
	 * Returns the time difference in seconds. (返回秒的时间差)
	 */
	second,
}
/**
 * @enum Time zone offset enum.(时区偏移量枚举)
 */
export enum TimeZoneOffsetEnum {
	'UTC-12:00' = 720,
	'UTC-11:00' = 660,
	'UTC-10:00' = 600,
	'UTC-09:00' = 540,
	'UTC-08:00' = 480,
	'UTC-07:00' = 420,
	'UTC-06:00' = 360,
	'UTC-05:00' = 300,
	'UTC-04:00' = 240,
	'UTC-03:30' = 210,
	'UTC-03:00' = 180,
	'UTC-02:00' = 120,
	'UTC-01:00' = 60,
	'UTC±00:00' = 0,
	'UTC+01:00' = -60,
	'UTC+02:00' = -120,
	'UTC+03:00' = -180,
	'UTC+03:30' = -210,
	'UTC+04:00' = -240,
	'UTC+04:30' = -270,
	'UTC+05:00' = -300,
	'UTC+05:30' = -330,
	'UTC+05:45' = -345,
	'UTC+06:00' = -360,
	'UTC+06:30' = -390,
	'UTC+07:00' = -420,
	'UTC+08:00' = -480,
	'UTC+08:45' = -525,
	'UTC+09:00' = -540,
	'UTC+09:30' = -570,
	'UTC+10:00' = -600,
	'UTC+10:30' = -630,
	'UTC+11:00' = -660,
	'UTC+12:00' = -720,
}
/**
 * DateTime Object(日期时间对象)
 */
interface DateTime {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}
/**
 * Format date and time.(格式化日期与时间)
 * @param {string|number|Date} date Specify date and time, support timestamp/date character/Date object, default is current date.(指定日期时间，支持时间戳/日期字符/Date对象，默认为当前日期)
 * @param {string} formater Specify the date and time format, default is YYYY-MM-DD HH:mm:ss.(指定日期和时间的格式，默认为YYYY-MM-DD HH:mm:ss)
 * @example
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import DateUtils  from 'boots-js/date-utils' // Es6 Module
 *
 * DateUtils.dateFormater('Mon Feb 26 2024', 'YYYY-MM-DD')             //2024-02-26
 * DateUtils.dateFormater('2024/2/26', 'YYYY-MM-DD')                   //2024-02-26
 * DateUtils.dateFormater(1708917102083, 'YYYY-MM-DD HH:mm:ss')        //'2024-02-26 11:11:42'
 * DateUtils.dateFormater('2024/2/26 11:11:42', 'YYYY/MM/DD/HH/mm/ss') //'2024/02/26/11/11/42';
 */
export function dateFormater(date: string | number | Date = new Date(), formater: string = 'YYYY-MM-DD HH:mm:ss'): String {
	let tempDate = date ? new Date(date) : new Date(),
		year = tempDate.getFullYear(),
		month = tempDate.getMonth() + 1,
		day = tempDate.getDate(),
		hour = tempDate.getHours(),
		minute = tempDate.getMinutes(),
		second = tempDate.getSeconds();

	return formater
		.replace(/YYYY/g, year.toString())
		.replace(/YY/g, year.toString().substr(2, 2))
		.replace(/MM/g, (month < 10 ? '0' : '') + month)
		.replace(/DD/g, (day < 10 ? '0' : '') + day)
		.replace(/HH/g, (hour < 10 ? '0' : '') + hour)
		.replace(/mm/g, (minute < 10 ? '0' : '') + minute)
		.replace(/ss/g, (second < 10 ? '0' : '') + second);
}
/**
 * Determine whether a given date is a leap year.(给定年份判断是否闰年)
 * @param {number} year Specify the year.(指定年份)
 * @example
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import  DateUtils  from 'boots-js/date-utils' // Es6 Module
 *
 * DateUtils.isLeapYear(2040)             //true
 * DateUtils.isLeapYear(2019)             //false
 */
export function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
/**
 * Given a date, returns the total number of days in the month.(给定日期返回当月总天数)
 * @param {number} year Specify the year.(指定年份)
 * @param {number} month Specify the month, starting from 1.(指定月份，从1月开始)
 * @example
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import DateUtils  from 'boots-js/date-utils' // Es6 Module
 *
 * DateUtils.getDaysInMonth(2024, 2)            //29
 * DateUtils.getDaysInMonth(2025, 2)            //28
 * DateUtils.getDaysInMonth(2025, 8)            //31
 */
export function getDaysInMonth(year: number, month: number): number {
	if (month < 1 || month > 12) throw new Error('month out of range');
	const daysPerMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (month === 2 && isLeapYear(year)) return 29;
	return daysPerMonth[month];
}
/**
 * Calculate the time between two dates.(计算两日期的相隔时间)
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
 * @example
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import DateUtils  from 'boots-js/date-utils' // Es6 Module
 *
 * DateUtils.getDateDiff('2024/1/26', '2025/1/26', DateUtils.dateUnitEnum.day)   //366
 * DateUtils.getDateDiff('2024/1/26', '2025/1/26', DateUtils.dateUnitEnum.month) //12
 * DateUtils.getDateDiff('2025/6/19', '2025/9/18', DateUtils.dateUnitEnum.year)  //0
 * DateUtils.getDateDiff('2025/6/19', '2025/9/18', DateUtils.dateUnitEnum.all)   //{years: 0, months: 2,days: 30,hours: 0,minutes: 0,seconds: 0}
 */
export function getDateDiff(
	startDate: string | number | Date = new Date(),
	endDate: string | number | Date = new Date(),
	unit: DateUnitEnum = DateUnitEnum.day
): number | DateTime {
	const start = startDate ? new Date(startDate) : new Date(),
		end = endDate ? new Date(endDate) : new Date();
	if (end.getTime() < start.getTime()) throw new Error('The start date should be less than the end date');
	const diffSecond = end.getSeconds() - start.getSeconds(),
		diffMinute = end.getMinutes() - start.getMinutes() - (diffSecond < 0 ? 1 : 0),
		diffHour = end.getHours() - start.getHours() - (diffMinute < 0 ? 1 : 0),
		diffDay = end.getDate() - start.getDate() - (diffHour < 0 ? 1 : 0),
		diffMonth = end.getMonth() - start.getMonth() - (diffDay < 0 ? 1 : 0),
		diffYear = end.getFullYear() - start.getFullYear() - (diffMonth < 0 ? 1 : 0);
	switch (unit) {
		case DateUnitEnum.all:
			let endMonth = end.getMonth(),
				endYear = end.getFullYear();
			if (endMonth == 0) {
				endMonth = 12;
				endYear -= endYear;
			}
			return {
				years: diffYear,
				months: diffMonth < 0 ? diffMonth + 12 : diffMonth,
				days: diffDay < 0 ? diffDay + getDaysInMonth(endYear, endMonth) : diffDay,
				hours: diffHour < 0 ? diffHour + 24 : diffHour,
				minutes: diffMinute < 0 ? diffMinute + 60 : diffMinute,
				seconds: diffSecond < 0 ? diffSecond + 60 : diffSecond,
			};
		case DateUnitEnum.year:
			return diffYear;
		case DateUnitEnum.month:
			return (diffMonth < 0 ? diffMonth + 12 : diffMonth) + diffYear * 12;
		case DateUnitEnum.day:
			return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
		case DateUnitEnum.hour:
			return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60));
		case DateUnitEnum.minute:
			return Math.floor((end.getTime() - start.getTime()) / (1000 * 60));
		case DateUnitEnum.second:
			return Math.floor((end.getTime() - start.getTime()) / 1000);
		default:
			throw new Error('Please enter unit as the correct enumeration type');
	}
}
/**
 * Date Add/Subtract Calculator(日期加/减计算器)
 * @param {string|number|Date} startDate Specify start date, support timestamp/date character/Date object, default is current date.(指定开始日期，支持时间戳/日期字符/Date对象，默认为当前日期)
 * @param {DateTime} options An object specifying the amount of years, months, days, hours, minutes, and seconds to add/subtract from the start date. (包含要添加/减去的年、月、日、小时、分钟和秒数的对象)
 *    - years: Number of years to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的年数。正数表示添加，负数表示减去)
 *    - months: Number of months to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的月数。正数表示添加，负数表示减去)
 *    - days: Number of days to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的天数。正数表示添加，负数表示减去)
 *    - hours: Number of hours to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的小时数。正数表示添加，负数表示减去)
 *    - minutes: Number of minutes to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的分钟数。正数表示添加，负数表示减去)
 *    - seconds: Number of seconds to add/subtract. Positive number for addition, negative number for subtraction. (要添加/减去的秒数。正数表示添加，负数表示减去)
 * @example
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import  DateUtils  from 'boots-js/date-utils' // Es6 Module
 *
 * DateUtils.dateCalculator('2024/2/12', { years: 1 }).toISOString() //2025-02-12
 */
export function dateCalculator(startDate: string | number | Date = new Date(), options: DateTime): Date {
	const start = startDate ? new Date(startDate) : new Date();
	const { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = options;

	const newDate = new Date(start.getTime());
	newDate.setFullYear(start.getFullYear() + years);
	newDate.setMonth(start.getMonth() + months);
	newDate.setDate(start.getDate() + days);
	newDate.setHours(start.getHours() + hours);
	newDate.setMinutes(start.getMinutes() + minutes);
	newDate.setSeconds(start.getSeconds() + seconds);

	return newDate;
}
/**
 * Convert time zone.(转换时区)
 * @param {string} date Give a date.(给定时间)
 * @param {TimeZoneOffsetEnum} orginTimeZone Time zone of original time.(原始时间的时区)
 * @param {TimeZoneOffsetEnum} timeZone Time zone to be converted.(需要转换的时区)
 * @example
 * const  DateUtils  = require('boots-js/cjs/date-utils'); // CommandJS
 * import DateUtils  from 'boots-js/date-utils' // Es6 Module
 *
 * DateUtils.convertTimeZone(
 *         1711611931754,
 *         DateUtils.timeZoneOffsetEnum['UTC+08:00'],
 *         DateUtils.timeZoneOffsetEnum['UTC-06:00'])
 * DateUtils.convertTimeZone(
 *         '2024/2/12',
 *         DateUtils.timeZoneOffsetEnum['UTC+08:00'],
 *         DateUtils.timeZoneOffsetEnum['UTC+09:00'])
 */
export function convertTimeZone(date: string | number | Date = new Date(), orginTimeZone: TimeZoneOffsetEnum, timeZone: TimeZoneOffsetEnum): Date {
	const orginDate = date ? new Date(date) : new Date();
	return dateCalculator(orginDate, {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: orginTimeZone - timeZone,
		seconds: 0,
	});
}

/**
 * @ignore
 */
export default {
	DateUnitEnum,
	TimeZoneOffsetEnum,
	dateFormater,
	isLeapYear,
	getDaysInMonth,
	getDateDiff,
	dateCalculator,
	convertTimeZone,
};
