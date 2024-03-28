interface Tree2ArrayOptions {
    generateLevel: boolean;
    generateLevelKey: string;
    generateParentID: boolean;
    parentIDKey: string;
    generateParentIDKey: string;
    deleteAttriList: Array<string>;
}
const tree2ArrayDefaultOptions: Tree2ArrayOptions = {
    generateLevel: true,
    generateLevelKey: "level",
    generateParentID: false,
    parentIDKey: "id",
    generateParentIDKey: "parentID",
    deleteAttriList: [],
}
export class TreeTool {
    static tree2Array(tree: any, childListKey: string, options: Tree2ArrayOptions = tree2ArrayDefaultOptions): Array<any> {
        let {
            generateLevel = true,
            generateLevelKey = "level",
            generateParentID = false,
            parentIDKey = "id",
            generateParentIDKey = "parentID",
            deleteAttriList = []
        } = options, quene = [tree], result = [], level = 0;
        while (quene.length > 0) {
            let length = quene.length;
            while (length-- > 0) {
                const node = quene.pop(), childList = node[childListKey];
                if (Array.isArray(childList)) {
                    childList.forEach((val: any) => {
                        if (generateParentID) val[generateParentIDKey] = node[parentIDKey]
                        quene.unshift(val)
                    })
                }
                if (generateLevel) node[generateLevelKey] = level;
                if(Array.isArray(deleteAttriList)){
                    deleteAttriList.forEach((val)=>{
                        delete node[val]
                    })
                }
                result.push(node);
            }
            level++;
        }
        return result;
    }
    static array2Tree(arr:Array<any>,idKey:string,parentIDKey:string,generateChildListKey:string,judgeRootNodeFunction:Function):Array<any>{
        // 通过函数判断是否root节点
        const result:Array<any>=[],map=new Map();
        if(!Array.isArray(arr)){
            console.warn(`${arr} is not an Array!`);
            return [];
        }
        arr.forEach((val)=>{
            val[generateChildListKey]=[];
            if(judgeRootNodeFunction(val))result.push(val);
            if(map.has(val[parentIDKey])) map.get(val[parentIDKey])[generateChildListKey].push(val)
            map.set(val[idKey],val);
        })
        return result
    }
    static getChildNode():any{

    }
    static findPath():any{

    }
}
