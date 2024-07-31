const  PerformanceUtil  = require('../dist/cjs/performance-util');
const BootsJS = require('../dist/cjs/index');


test('test PerformanceUtil class', () => {
    let a = 0
    function add(nv) {
        a += nv
        return a
    }
    const debounceAdd = PerformanceUtil.debounce(add, 500, true);
    debounceAdd(1); debounceAdd(1); debounceAdd(1);
    expect(a).toBe(1);
    const debounceAdd2 = BootsJS.PerformanceUtil.debounce(add, 500, true);
    debounceAdd2(1); debounceAdd2(1); debounceAdd2(1);
    expect(a).toBe(2);

    let num = 0
    function addNum(nv) {
        num += nv
    }
    const throttleAdd = PerformanceUtil.throttle(addNum, 500);
    throttleAdd(1); throttleAdd(1); throttleAdd(1);
    expect(num).toBe(1);
    const throttleAdd2 = BootsJS.PerformanceUtil.throttle(addNum, 500);
    throttleAdd2(1); throttleAdd2(1); throttleAdd2(1);
    expect(num).toBe(2);

    let count=0
    function addCount(nv){
        count+=nv;
        return count 
    }
    const memoizeAdd=PerformanceUtil.memoize(addCount,{
        expirationTime:2000
    })
    memoizeAdd(1);memoizeAdd(1);memoizeAdd(1);
    expect(count).toBe(1)
    memoizeAdd(2);memoizeAdd(2);memoizeAdd(2);
    expect(count).toBe(3)
});