const { ObjectTool } = require('../dist/object-tool');
const BootsJS = require('../dist/index');


test('test DateTool class', async () => {
    expect(ObjectTool.type(123)).toBe('Number');
    expect(ObjectTool.type(true)).toBe('Boolean');
    expect(ObjectTool.type('String')).toBe('String');
    expect(ObjectTool.type(new Map())).toBe('Map');
    expect(ObjectTool.type(new Array())).toBe('Array');
    expect(ObjectTool.type(new ArrayBuffer())).toBe('ArrayBuffer');
    let arrayBuffer=new ArrayBuffer(10),
    int16Array=new Int16Array(arrayBuffer),
    map=new Map(),
    set=new Set(),
    set1=new Set(),
    obj={
        test:1233,
        test2:1111
    },
    obj_1={
        test2:1111,
        test:1233
    },
    fn=function(pr){
        console.info(pr)
    }
    weakRef=new WeakRef(obj)

    int16Array[0]=10
    int16Array[1]=20
    map.set({a:1},1)
    map.set({a:2},2)
    map.set(true,3)
    map.set("true",4)
    map.set(13,4)

      
    
    set1.add(true)
    set1.add(13)
    set1.add({a:2})
    set1.add({a:1})

    set.add({a:1})
    set.add({a:2})
    set.add(13)
    set.add(true)

    let obj1={
        array:[1,2,3,4],
        boolean:false,
        number:1,
        string:'2394',
        null:null,
        undefined:undefined,
        bigInt:BigInt(2233),
        objcet:{
            arrayBuffer:arrayBuffer,
            int16Array:int16Array,
            number:1,
            obj2:{
                map:map,
                set:set,
                obj:obj,
                weakRef:weakRef,
                fn:fn,
            }
        },
        number2:1,
    }
    let obj2={
        array:[1,2,3,4],
        boolean:false,
        number:1,
        number2:1,
        string:'2394',
        null:null,
        undefined:undefined,
        bigInt:BigInt(2233),
        objcet:{
            number:1,
            arrayBuffer:arrayBuffer,
            int16Array:int16Array,
            obj2:{
                map:map,
                set:set1,
                obj:obj_1,
                weakRef:weakRef,
                fn:fn
            }
        }
    }
    let obj3={
        array:[2,2,3,4],
        boolean:false,
        number:1,
        string:'2394',
        null:null,
        undefined:undefined,
        bigInt:BigInt(2233),
        objcet:{
            arrayBuffer:arrayBuffer,
            int16Array:int16Array,
            obj2:{
                map:map,
                set:set1,
                obj:obj_1,
                weakRef:weakRef,
                fn:fn,
                obj3:{

                }
            }
        }
    }
    let obj4={}
    obj4.a={
        b:'123',
        c:obj4
    }

    expect(ObjectTool.argToKey(obj1)===ObjectTool.argToKey(obj2)).toBe(true);
    expect(ObjectTool.argToKey(obj1)===ObjectTool.argToKey(obj3)).toBe(false);


    testObj={
        a:'123',
        b:123,
        c:true,
        d:new Map(),
    }
    testObj2={
        a:testObj,
        c:function(){},
    }
    testObj3={
        a:testObj2,
        c:true
    }

    let test4=ObjectTool.deepClone(testObj3)
    console.info(test4)
    expect(test4===testObj3).toBe(false);
    expect(test4.a===testObj3.a).toBe(false);
    expect(test4.a.a===testObj3.a.a).toBe(false);
    expect(test4.a.a.d===testObj3.a.a.d).toBe(false);
    expect(test4.a.c===testObj3.a.c).toBe(true);
});
