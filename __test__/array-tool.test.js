const  ArrayTool  = require('../dist/cjs/array-tool');
const BootsJS = require('../dist/cjs/index');


test('test ArrayTool class', () => {
    const test1={a:'1'},test2={a:'1'},
    arr1=[test1,test2,test1],
    arr2=[1,2,3,1,4]
    expect(ArrayTool.removeDuplicates(arr1)).toStrictEqual([test1,test2]);
    expect(ArrayTool.removeDuplicates(arr1,true)).toStrictEqual([test1]);
    expect(BootsJS.ArrayTool.removeDuplicates(arr2)).toStrictEqual([1,2,3,4]);
})