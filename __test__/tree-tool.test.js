const { TreeTool } = require('../dist/tree-tool');
const BootsJS = require('../dist/index');


test('test TreeTool class', () => {
    const tree={
        name:'中国',
        code:'0',
        childList:[
            {
                name:'重庆',
                code:'01',
                childList:[
                    {
                        name:'渝北区',
                        code:'001',
                        childList:[]
                    },
                    {
                        name:'江北区',
                        code:'002',
                        childList:[]
                    },
                    {
                        name:'沙坪坝区',
                        code:'003',
                        childList:[]
                    },
                    {
                        name:'大渡口区',
                        code:'003',
                        childList:[]
                    },
                ]
            },
            {
                name:'四川',
                code:'02',
            },
            {
                name:'广东',
                code:'03',
            },
        ]
    }
    let arr=TreeTool.tree2Array(tree,'childList',{
        generateLevel:false,
        generateParentID:true,
        parentIDKey:'code',
        generateParentIDKey:'parentCode',
        deleteAttriList:['childList']
    })
    let genTree=TreeTool.array2Tree(arr,'code','parentCode','childList',(obj)=>{
        return !('parentCode' in obj)
    })
})