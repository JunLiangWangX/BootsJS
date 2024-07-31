const  ObjectUtil  = require('../dist/cjs/object-util');
const BootsJS = require('../dist/cjs/index');


test('test ObjectUtil class', async () => {
    
    expect(ObjectUtil.type(123)).toBe('Number');
    expect(ObjectUtil.type(true)).toBe('Boolean');
    expect(ObjectUtil.type('String')).toBe('String');
    expect(ObjectUtil.type(new Map())).toBe('Map');
    expect(ObjectUtil.type(new Array())).toBe('Array');
    expect(ObjectUtil.type(new ArrayBuffer())).toBe('ArrayBuffer');


    const obj1={Number:1},obj2={Boolean:2},obj3={obj:obj1,String:'123'},
    obj4={obj1:obj3,obj2:obj2,Null:null,Undefined:undefined,Symbol:Symbol('X'),BigInt:BigInt(123)}
    map=new Map(),fun=function(){console.info(test)}
    map.set(1,obj1)
    map.set(obj1,obj2)
    map.set('test',obj2)
    const testObj={
        Int8Array:new Int8Array([1,2,3,4,5]),
        Int16Array:new Int16Array([11,22,33,44,55]),
        Int32Array:new Int32Array([111,222,333,444,555]),
        Uint8Array:new Uint8Array([1111,2222,3333,4444,5555]),
        Uint16Array:new Uint16Array([11111,22222,3323,4444,4455]),
        Uint32Array:new Uint32Array([21311,2231,3123,4434,51215]),
        Float32Array:new Float32Array([11,22,33,44,55]),
        Float64Array:new Float64Array([11,22,33,44,55]),
        BigInt64Array:new BigInt64Array([BigInt(123),BigInt(123),BigInt(123)]),
        BigUint64Array:new BigUint64Array([BigInt(123),BigInt(123),BigInt(123)]),
        Date:new Date(),
        RegExp:/1234/,
        Array:new Array(...[obj1,obj2,obj3,obj4]),
        Set:new Set([obj1,obj2,obj3,obj4]),
        Map:map,
        Object:obj4,
        ArrayBuffer:new ArrayBuffer(10),
        DataView:new DataView(new ArrayBuffer(10)),
        Function:fun
    }
    testObj.Object.testObj=testObj
    const copyObj=testObj
    let deepCopyObj=ObjectUtil.deepClone(testObj)

    expect(ObjectUtil.argToStrKey(deepCopyObj)===ObjectUtil.argToStrKey(testObj)).toBe(true);
    expect(copyObj.Int8Array===testObj.Int8Array).toBe(true);
    expect(deepCopyObj.Int8Array===testObj.Int8Array).toBe(false);
    expect(copyObj.Date===testObj.Date).toBe(true);
    expect(deepCopyObj.Date===testObj.Date).toBe(false);
    expect(copyObj.RegExp===testObj.RegExp).toBe(true);
    expect(deepCopyObj.RegExp===testObj.RegExp).toBe(false);
    expect(copyObj.Array===testObj.Array).toBe(true);
    expect(deepCopyObj.Array===testObj.Array).toBe(false);
    expect(copyObj.Array[3].obj1===testObj.Array[3].obj1).toBe(true);
    expect(deepCopyObj.Array[3].obj1===testObj.Array[3].obj1).toBe(false);
    expect(copyObj.Set===testObj.Set).toBe(true);
    expect(deepCopyObj.Set===testObj.Set).toBe(false);
    expect(copyObj.Map===testObj.Map).toBe(true);
    expect(deepCopyObj.Map===testObj.Map).toBe(false);
    expect(copyObj.Map.get(1)===testObj.Map.get(1)).toBe(true);
    expect(deepCopyObj.Map.get(1)===testObj.Map.get(1)).toBe(false);
    expect(copyObj.Object.obj1.obj===testObj.Object.obj1.obj).toBe(true);
    expect(deepCopyObj.Object.obj1.obj===testObj.Object.obj1.obj).toBe(false);
    expect(copyObj.ArrayBuffer===testObj.ArrayBuffer).toBe(true);
    expect(deepCopyObj.ArrayBuffer===testObj.ArrayBuffer).toBe(false);
    expect(copyObj.DataView===testObj.DataView).toBe(true);
    expect(deepCopyObj.DataView===testObj.DataView).toBe(false);
    expect(copyObj.Function===testObj.Function).toBe(true);
    expect(deepCopyObj.Function===testObj.Function).toBe(true);

    const map2=new Map()
    map2.set('test',obj2)
    map2.set(obj1,obj2)
    map2.set(1,obj1)
    const date=new Date()
    const testObj2={
        BigInt64Array:new BigInt64Array([BigInt(123),BigInt(123),BigInt(123)]),
        Float64Array:new Float64Array([11,22,33,44,55]),
        Uint32Array:new Uint32Array([21311,2231,3123,4434,51215]),
        Uint16Array:new Uint16Array([11111,22222,3323,4444,4455]),
        Int16Array:new Int16Array([11,22,33,44,55]),
        Int8Array:new Int8Array([1,2,3,4,5]),
        Uint8Array:new Uint8Array([1,2,3,4,5]),
        Int32Array:new Int32Array([111,222,333,444,555]),
        Float32Array:new Float32Array([11,22,33,44,55]),
        BigUint64Array:new BigUint64Array([BigInt(123),BigInt(123),BigInt(123)]),
        RegExp:/1234/,
        Array:new Array(...[obj1,obj2,obj3,obj4]),
        Set:new Set([obj1,obj2,obj3,obj4]),
        Object:obj4,
        Map:map2,
        Date:date,
        ArrayBuffer:new ArrayBuffer(10),
        DataView:new DataView(new ArrayBuffer(10)),
    }
    const testObj3={
        Int8Array:new Int8Array([1,2,3,4,5]),
        RegExp:/1234/,
        Uint32Array:new Uint32Array([21311,2231,3123,4434,51215]),
        Int16Array:new Int16Array([11,22,33,44,55]),
        Array:new Array(...[obj1,obj2,obj3,obj4]),
        Uint16Array:new Uint16Array([11111,22222,3323,4444,4455]),
        Uint8Array:new Uint8Array([1,2,3,4,5]),
        Set:new Set([obj4,obj3,obj2,obj1]),
        Int32Array:new Int32Array([111,222,333,444,555]),
        Object:obj4,
        Float64Array:new Float64Array([11,22,33,44,55]),
        Map:map,
        BigInt64Array:new BigInt64Array([BigInt(123),BigInt(123),BigInt(123)]),
        Date:date,
        ArrayBuffer:new ArrayBuffer(10),
        BigUint64Array:new BigUint64Array([BigInt(123),BigInt(123),BigInt(123)]),
        DataView:new DataView(new ArrayBuffer(10)),
        Float32Array:new Float32Array([11,22,33,44,55]),
    }
    let testObj4=ObjectUtil.deepClone(testObj2)
    testObj4.Array=new Array(...[obj2,obj1,obj3,obj4])
    let testObj5=ObjectUtil.deepClone(testObj2)
    testObj5.Object.obj1.String='12344'
    expect(ObjectUtil.isEqual(testObj2,testObj3)).toBe(true);
    expect(ObjectUtil.isEqual(testObj2,ObjectUtil.deepClone(testObj2))).toBe(true);
    expect(ObjectUtil.isEqual(testObj2,testObj4)).toBe(false);
    expect(ObjectUtil.isEqual(testObj2,testObj5)).toBe(false);

    
    expect(ObjectUtil.argToStrKey(testObj2)===ObjectUtil.argToStrKey(testObj3)).toBe(true);
    expect(ObjectUtil.argToStrKey(testObj2)===ObjectUtil.argToStrKey(testObj4)).toBe(false);
    expect(ObjectUtil.argToStrKey(testObj2)===ObjectUtil.argToStrKey(testObj5)).toBe(false);


    expect(ObjectUtil.deepMerge({a:1},{b:1})).toEqual({
        a:1,
        b:1
    })
    expect(ObjectUtil.deepMerge({a:{
        a:1,
        b:1
    }},{a:{
        c:1,
        d:1
    }})).toEqual({
        a:{
            a:1,
            b:1,
            c:1,
            d:1
        }
    })
    expect(ObjectUtil.deepMerge({
        a:'1',
        arr1:[1,23],
        b:{
            ba:2,
            bb:false,
            bc:[1,2,{a:1}]
        }
    },{
        arr1:[1,23],
        b:{
            bc:[1,2,{a:1},3,4],
            bd:{a:1}
        },
        c:false,
    },ObjectUtil.ArrayMergeModeEnum.CompareMerge)).toEqual({
        a:'1',
        arr1:[1,23],
        b:{
            ba:2,
            bb:false,
            bc:[1,2,{a:1},{a:1},3,4],
            bd:{a:1}
        },
        c:false,
    })
    
     expect(ObjectUtil.deepMerge([1,2,3],[4,5,6])).toEqual([1,2,3])
     expect(ObjectUtil.deepMerge([1,2,3],[3,4],ObjectUtil.ArrayMergeModeEnum.IncrementalMerge)).toEqual([1,2,3,3,4])
     expect(ObjectUtil.deepMerge([1,2,3],[3,4],ObjectUtil.ArrayMergeModeEnum.CompareMerge)).toEqual([1,2,3,4])
    
});
