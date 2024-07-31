const  ArrayUtils  = require('../dist/cjs/array-utils');
const BootsJS = require('../dist/cjs');


test('test ArrayUtils class', () => {
    const test1={a:'1'},test2={a:'1'},
    arr1=[test1,test2,test1],
    arr2=[1,2,3,1,4]
    expect(ArrayUtils.removeDuplicates(arr1)).toStrictEqual([test1,test2]);
    expect(ArrayUtils.removeDuplicates(arr1,true)).toStrictEqual([test1]);
    expect(BootsJS.ArrayUtils.removeDuplicates(arr2)).toStrictEqual([1,2,3,4]);
})