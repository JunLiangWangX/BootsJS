const { PerformanceTool } = require('../dist/performance-tool');
const BootsJS = require('../dist/index');


test('test PerformanceTool class', () => {
    let a = 0
    function add(nv) {
        a += nv
        return a
    }
    const debounceAdd = PerformanceTool.debounce(add, 500, true);
    debounceAdd(1); debounceAdd(1); debounceAdd(1);
    expect(a).toBe(1);
    const debounceAdd2 = BootsJS.PerformanceTool.debounce(add, 500, true);
    debounceAdd2(1); debounceAdd2(1); debounceAdd2(1);
    expect(a).toBe(2);

    let num = 0
    function addNum(nv) {
        num += nv
    }
    const throttleAdd = PerformanceTool.throttle(addNum, 500);
    throttleAdd(1); throttleAdd(1); throttleAdd(1);
    expect(num).toBe(1);
    const throttleAdd2 = BootsJS.PerformanceTool.throttle(addNum, 500);
    throttleAdd2(1); throttleAdd2(1); throttleAdd2(1);
    expect(num).toBe(2);

    let count=0
    function addCount(nv){
        count+=nv;
        return count 
    }
    const memoizeAdd=PerformanceTool.memoize(addCount,{
        expirationTime:2000
    })
    memoizeAdd(1);memoizeAdd(1);memoizeAdd(1);
    expect(count).toBe(1)
    memoizeAdd(2);memoizeAdd(2);memoizeAdd(2);
    expect(count).toBe(3)
});