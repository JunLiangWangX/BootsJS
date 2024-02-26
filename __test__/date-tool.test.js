const { DateTool } = require('../dist/date-tool');
const BootsJS=require('../dist/index');


test('test DateTool class', () => {
    expect(DateTool.dateFormater('Mon Feb 26 2024','YYYY-MM-DD')).toBe('2024-02-26');
    expect(DateTool.dateFormater('2024/2/26','YYYY-MM-DD')).toBe('2024-02-26');
    expect(DateTool.dateFormater(1708917102083,'YYYY-MM-DD hh:mm:ss')).toBe('2024-02-26 11:11:42');
    expect(DateTool.dateFormater('2024/2/26 11:11:42','YYYY/MM/DD/hh/mm/ss')).toBe('2024/02/26/11/11/42');
    expect(DateTool.dateFormater(new Date(1708917102083),'YYYY/MM/DD/hh/mm/ss')).toBe('2024/02/26/11/11/42');
    expect(BootsJS.DateTool.dateFormater('Mon Feb 26 2024','YYYY-MM-DD')).toBe('2024-02-26');
    expect(BootsJS.DateTool.dateFormater('2024/2/26','YYYY-MM-DD')).toBe('2024-02-26');
    expect(BootsJS.DateTool.dateFormater(1708917102083,'YYYY-MM-DD hh:mm:ss')).toBe('2024-02-26 11:11:42');
    expect(BootsJS.DateTool.dateFormater('2024/2/26 11:11:42','YYYY/MM/DD/hh/mm/ss')).toBe('2024/02/26/11/11/42');
    expect(BootsJS.DateTool.dateFormater(new Date(1708917102083),'YYYY/MM/DD/hh/mm/ss')).toBe('2024/02/26/11/11/42');

    expect(DateTool.isLeapYear(2040)).toBe(true);
    expect(DateTool.isLeapYear(2000)).toBe(true);
    expect(DateTool.isLeapYear(2020)).toBe(true);
    expect(DateTool.isLeapYear(2024)).toBe(true);
    expect(BootsJS.DateTool.isLeapYear(2019)).toBe(false);
    expect(BootsJS.DateTool.isLeapYear(2025)).toBe(false);
    expect(BootsJS.DateTool.isLeapYear(2027)).toBe(false);
    expect(BootsJS.DateTool.isLeapYear(1997)).toBe(false);

    expect(DateTool.getDaysInMonth(2024,2)).toBe(29);
    expect(DateTool.getDaysInMonth(2024,7)).toBe(31);
    expect(DateTool.getDaysInMonth(2025,2)).toBe(28);
    expect(DateTool.getDaysInMonth(2025,8)).toBe(31);

    expect(DateTool.getDateDiff('2024/1/26','2025/1/26',DateTool.dateUnitEnum.day)).toBe(366);
    expect(DateTool.getDateDiff('2024/1/26','2025/1/26',DateTool.dateUnitEnum.month)).toBe(12);
    expect(DateTool.getDateDiff('2025/6/19','2025/9/18',DateTool.dateUnitEnum.month)).toBe(2);
    expect(DateTool.getDateDiff('2025/6/19','2025/9/18',DateTool.dateUnitEnum.year)).toBe(0);
    expect(DateTool.getDateDiff('2025/6/19','2025/9/18',DateTool.dateUnitEnum.all)).toEqual({
        years: 0,
        months: 2,
        days: 30,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    expect(DateTool.getDateDiff('2025/8/18 23:00','2025/8/19 21:00',DateTool.dateUnitEnum.hour)).toBe(22);
    expect(DateTool.getDateDiff('2025/8/18 23:19','2025/8/19 21:00',DateTool.dateUnitEnum.hour)).toBe(21);
    expect(DateTool.getDateDiff('2025/8/18 23:19','2025/8/19 21:00',DateTool.dateUnitEnum.minute)).toBe(1301);
    expect(BootsJS.DateTool.getDateDiff('2024/3/25','2030/2/1',DateTool.dateUnitEnum.year)).toBe(5);
    expect(BootsJS.DateTool.getDateDiff('2024/2/2','2030/1/1',DateTool.dateUnitEnum.month)).toBe(70);
    expect(BootsJS.DateTool.getDateDiff('2024/2/12','2030/3/10',DateTool.dateUnitEnum.day)).toBe(2218);
    expect(BootsJS.DateTool.getDateDiff('2024/2/12','2030/3/10',DateTool.dateUnitEnum.all)).toEqual({
        years: 6,
        months: 0,
        days: 26,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    
    expect(BootsJS.DateTool.dateCalculator('2024/2/12',{years:1}).toISOString()).toBe(new Date('2025/2/12').toISOString());
    

})