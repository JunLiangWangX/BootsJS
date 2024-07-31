const  DateUtil = require('../dist/cjs/date-util');
const BootsJS = require('../dist/cjs/index');

test('test DateUtil class', () => {
    expect(DateUtil.dateFormater('Mon Feb 26 2024', 'YYYY-MM-DD')).toBe('2024-02-26');
    expect(DateUtil.dateFormater('2024/2/26', 'YYYY-MM-DD')).toBe('2024-02-26');
    //expect(DateUtil.dateFormater(1708917102083, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-02-26 11:11:42');
    expect(DateUtil.dateFormater('2024/2/26 11:11:42', 'YYYY/MM/DD/HH/mm/ss')).toBe('2024/02/26/11/11/42');
    //expect(DateUtil.dateFormater(new Date(1708917102083), 'YYYY/MM/DD/HH/mm/ss')).toBe('2024/02/26/11/11/42');
    expect(DateUtil.dateFormater('Mon Feb 26 2024', 'YYYY-MM-DD')).toBe('2024-02-26');
    expect(DateUtil.dateFormater('2024/2/26', 'YYYY-MM-DD')).toBe('2024-02-26');
    //expect(DateUtil.dateFormater(1708917102083, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-02-26 11:11:42');
    expect(DateUtil.dateFormater('2024/2/26 11:11:42', 'YYYY/MM/DD/HH/mm/ss')).toBe('2024/02/26/11/11/42');
    //expect(DateUtil.dateFormater(new Date(1708917102083), 'YYYY/MM/DD/HH/mm/ss')).toBe('2024/02/26/11/11/42');

    expect(DateUtil.isLeapYear(2040)).toBe(true);
    expect(DateUtil.isLeapYear(2000)).toBe(true);
    expect(DateUtil.isLeapYear(2020)).toBe(true);
    expect(DateUtil.isLeapYear(2024)).toBe(true);
    expect(DateUtil.isLeapYear(2019)).toBe(false);
    expect(DateUtil.isLeapYear(2025)).toBe(false);
    expect(DateUtil.isLeapYear(2027)).toBe(false);
    expect(DateUtil.isLeapYear(1997)).toBe(false);

    expect(DateUtil.getDaysInMonth(2024, 2)).toBe(29);
    expect(DateUtil.getDaysInMonth(2024, 7)).toBe(31);
    expect(DateUtil.getDaysInMonth(2025, 2)).toBe(28);
    expect(DateUtil.getDaysInMonth(2025, 8)).toBe(31);

    expect(DateUtil.getDateDiff('2024/1/26', '2025/1/26', DateUtil.DateUnitEnum.day)).toBe(366);
    expect(DateUtil.getDateDiff('2024/1/26', '2025/1/26', DateUtil.DateUnitEnum.month)).toBe(12);
    expect(DateUtil.getDateDiff('2025/6/19', '2025/9/18', DateUtil.DateUnitEnum.month)).toBe(2);
    expect(DateUtil.getDateDiff('2025/6/19', '2025/9/18', DateUtil.DateUnitEnum.year)).toBe(0);
    expect(DateUtil.getDateDiff('2025/6/19', '2025/9/18', DateUtil.DateUnitEnum.all)).toEqual({
        years: 0,
        months: 2,
        days: 30,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    expect(DateUtil.getDateDiff('2025/8/18 23:00', '2025/8/19 21:00', DateUtil.DateUnitEnum.hour)).toBe(22);
    expect(DateUtil.getDateDiff('2025/8/18 23:19', '2025/8/19 21:00', DateUtil.DateUnitEnum.hour)).toBe(21);
    expect(DateUtil.getDateDiff('2025/8/18 23:19', '2025/8/19 21:00', DateUtil.DateUnitEnum.minute)).toBe(1301);
    expect(DateUtil.getDateDiff('2024/3/25', '2030/2/1', DateUtil.DateUnitEnum.year)).toBe(5);
    expect(DateUtil.getDateDiff('2024/2/2', '2030/1/1', DateUtil.DateUnitEnum.month)).toBe(70);
    expect(DateUtil.getDateDiff('2024/2/12', '2030/3/10', DateUtil.DateUnitEnum.day)).toBe(2218);
    expect(DateUtil.getDateDiff('2024/2/12', '2030/3/10', DateUtil.DateUnitEnum.all)).toEqual({
        years: 6,
        months: 0,
        days: 26,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    expect(BootsJS.DateUtil.dateCalculator('2024/2/12', { years: 1 }).toISOString()).toBe(new Date('2025/2/12').toISOString());

    expect(BootsJS.DateUtil.convertTimeZone(
        1711611931754,
        BootsJS.DateUtil.TimeZoneOffsetEnum['UTC+08:00'],
        BootsJS.DateUtil.TimeZoneOffsetEnum['UTC+09:00']).valueOf()).toBe(1711615531754);
    expect(BootsJS.DateUtil.convertTimeZone(
        1711611931754,
        BootsJS.DateUtil.TimeZoneOffsetEnum['UTC+08:00'],
        BootsJS.DateUtil.TimeZoneOffsetEnum['UTC-06:00']).valueOf()).toBe(1711561531754);
    expect(BootsJS.DateUtil.convertTimeZone(
        1711611931754,
        BootsJS.DateUtil.TimeZoneOffsetEnum['UTC+08:00'],
        BootsJS. DateUtil.TimeZoneOffsetEnum['UTC±00:00']).valueOf()).toBe(1711583131754);



});
