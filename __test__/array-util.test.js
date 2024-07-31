const  ArrayUtil  = require('../dist/cjs/array-util');
const BootsJS = require('../dist/cjs/index');


test('test ArrayUtil class', () => {
    const test1={a:'1'},test2={a:'1'},
    arr1=[test1,test2,test1],
    arr2=[1,2,3,1,4]
    expect(ArrayUtil.removeDuplicates(arr1)).toStrictEqual([test1,test2]);
    expect(ArrayUtil.removeDuplicates(arr1,true)).toStrictEqual([test1]);
    expect(BootsJS.ArrayUtil.removeDuplicates(arr2)).toStrictEqual([1,2,3,4]);
})