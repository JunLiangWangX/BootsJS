/*
 * @Description: Some tools for working with tree.(一些处理树的工具)
 * @Author: JunLiangWang
 * @Date: 2024-03-29 09:18:45
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-04-15 16:38:20
 */

/**
 * Convert tree to array.(把树转换成数组)
 * @param {Array} treeList Given a list of trees.(给定树的列表)
 * @param {string} childListAttributeName The attribute name of the child node stored in the tree.(树中存放子节点的属性名)
 * @param {Tree2ArrayOptions} options Setting options.(设置选项)
 *    - isGenerateLevel: Whether to generate level,default false.(是否生成层级)
 *    - generateLevelAttributeName: Specify the attribute name of the generated level.(指定生成的层级的属性名称)
 *    - isGenerateParentID: Whether to generate parent node ID,default false.(是否生成父节点ID)
 *    - generateParentIDAttributeName: Specify the attribute name of the generated parent node ID.(指定生成的父节点ID的属性名称)
 *    - nodeIDAttributeName: Attribute name of node ID.(节点ID的属性名称)
 *    - deleteAttributeList: pecify the attribute in the node to be deleted.(指定删除节点中的属性)
 * @example
 * const  TreeTool  = require('boots-js/tree-tool'); // Node
 * import * as TreeTool  from 'boots-js/tree-tool' // Es6 Module
 * 
 *    const tree = {
 *        name: '中国',
 *        code: '0',
 *        childList: [
 *            {
 *                name: '重庆',
 *                code: '01',
 *            },
 *            {
 *                name: '四川',
 *                code: '02',
 *            },
 *            {
 *                name: '广东',
 *                code: '03',
 *            },
 *        ]
 *    } 
 *    let arr = TreeTool.tree2Array([tree], 'childList', {
 *        isGenerateLevel: true,
 *        generateLevelAttributeName:'level',
 *        isGenerateParentID: true,
 *        generateParentIDAttributeName: 'parentCode',
 *        nodeIDAttributeName: 'code',
 *        deleteAttributeList: ['childList']
 *    })
 *    console.info(arr)
 *      [
 *        { name: '中国', code: '0' , level:0 },
 *        { name: '重庆', code: '01', level:1 , parentCode: '0' },
 *        { name: '四川', code: '02', level:1 , parentCode: '0' },
 *        { name: '广东', code: '03', level:1 , parentCode: '0' },
 *      ]
 */
export function tree2Array(treeList: Array<any>, childListAttributeName: string, options: Tree2ArrayOptions = tree2ArrayDefaultOptions): Array<any> {
    if (!Array.isArray(treeList)) {
        console.warn(`${treeList} is not an Array!`);
        return treeList;
    }
    let {
        isGenerateLevel = false,
        generateLevelAttributeName = "level",
        isGenerateParentID = false,
        generateParentIDAttributeName = "parentID",
        nodeIDAttributeName = "id",
        deleteAttributeList = [],
    } = options, quene = [...treeList], result = [], level = 0;
    while (quene.length > 0) {
        let length = quene.length;
        while (length-- > 0) {
            const node = quene.pop(), childList = node[childListAttributeName];
            if (Array.isArray(childList)) {
                childList.forEach((val: any) => {
                    if (isGenerateParentID) val[generateParentIDAttributeName] = node[nodeIDAttributeName]
                    quene.unshift(val)
                })
            }
            if (isGenerateLevel) node[generateLevelAttributeName] = level;
            if (Array.isArray(deleteAttributeList)) {
                deleteAttributeList.forEach((val) => {
                    delete node[val]
                })
            }
            result.push(node);
        }
        level++;
    }
    return result;
}
/**
 * Convert array to tree.(把数组转换为树)
 * @param {Array} arr Given an array.(给定数组)
 * @param {string} nodeIDAttributeName Attribute name of node ID.(节点ID的属性名称)
 * @param {string} parentIDAttributeName Attribute name of parent node ID.(父节点ID的属性名称)
 * @param {string} generateChildListAttributeName Specify the attribute name of the child node in the tree.(指定树中存放子节点的属性名)
 * @param {Function} judgeRootNodeFunction Function to determine whether a node is the root node.(判断节点是否为根节点的方法)
 * @example
 * const  TreeTool  = require('boots-js/tree-tool'); // Node
 * import * as TreeTool  from 'boots-js/tree-tool' // Es6 Module
 * 
 *    const arr = [
 *        { name: '中国', code: '0' , level:0 },
 *        { name: '重庆', code: '01', level:1 , parentCode: '0' },
 *        { name: '四川', code: '02', level:1 , parentCode: '0' },
 *        { name: '广东', code: '03', level:1 , parentCode: '0' },
 *    ]
 *    let genTree = TreeTool.array2Tree(arr, 'code', 'parentCode', 'childList', (node) => {
 *        return !('parentCode' in node)
 *    })
 *    console.info(genTree)
 *      [
 *        {
 *          name: '中国',
 *          code: '0',
 *          level: 0,
 *          childList: [
 *            { name: '重庆', code: '01', level:1,  parentCode: '0', childList: [] },
 *            { name: '四川', code: '02', level:1, parentCode: '0', childList: [] },
 *            { name: '广东', code: '03', level:1, parentCode: '0', childList: [] }
 *          ]
 *        }
 *      ]
 */
export function array2Tree(arr: Array<any>, nodeIDAttributeName: string, parentIDAttributeName: string, generateChildListAttributeName: string, judgeRootNodeFunction: (node: any) => boolean): Array<any> {
    const result: Array<any> = [], map = new Map();
    if (!Array.isArray(arr)) {
        console.warn(`${arr} is not an Array!`);
        return [];
    }
    arr.forEach((val) => {
        val[generateChildListAttributeName] = map.has(val[nodeIDAttributeName]) ? map.get(val[nodeIDAttributeName])[generateChildListAttributeName] : [];
        if (judgeRootNodeFunction(val)) result.push(val);

        if (!map.has(val[parentIDAttributeName])) {
            let obj: any = {}
            obj[generateChildListAttributeName] = []
            map.set(val[parentIDAttributeName], obj)
        }

        map.get(val[parentIDAttributeName])[generateChildListAttributeName].push(val)
        map.set(val[nodeIDAttributeName], val);
    })
    return result
}
/**
 * Get all child nodes of a node.(获取节点的所有子节点)
 * @param {Array} treeList Given a list of trees.(给定树的列表)
 * @param {string} nodeIDAttributeName Attribute name of node ID.(节点ID的属性名称)
 * @param {string} nodeID Specify the ID of the node whose child nodes need to be obtained.(指定需要获取其子节点的节点的ID)
 * @param {string} childListAttributeName The attribute name of the child node stored in the tree.(树中存放子节点的属性名)
 * @example 
 * const  TreeTool  = require('boots-js/tree-tool'); // Node
 * import * as TreeTool  from 'boots-js/tree-tool' // Es6 Module
 * 
 *    const tree = {
 *        name: '中国',
 *        code: '0',
 *        childList: [
 *            {
 *                name: '重庆',
 *                code: '01',
 *            },
 *            {
 *                name: '四川',
 *                code: '02',
 *            },
 *            {
 *                name: '广东',
 *                code: '03',
 *            },
 *        ]
 *    } 
 *    let arr = TreeTool.getChildList([tree], 'code', '0', 'childList')
 *    console.info(arr)
 *      [
 *        { name: '重庆', code: '01' },
 *        { name: '四川', code: '02' },
 *        { name: '广东', code: '03' },
 *      ]
 */
export function getChildList(treeList: Array<any>, nodeIDAttributeName: string, nodeID: string, childListAttributeName: string): Array<any> {
    if (!Array.isArray(treeList)) {
        console.warn(`${treeList} is not an Array!`);
        return treeList;
    }
    let quene = [...treeList];
    while (quene.length > 0) {
        const node = quene.pop(), childList = node[childListAttributeName];
        if (node[nodeIDAttributeName] === nodeID) return childList;
        if (Array.isArray(childList)) {
            childList.forEach((val: any) => {
                quene.unshift(val)
            })
        }
    }
    return []
}
/**
 * Returns all nodes that meet the condition.(返回满足条件的所有节点)
 * @param {Array} treeList Given a list of trees.(给定树的列表)
 * @param {string} childListAttributeName The attribute name of the child node stored in the tree.(树中存放子节点的属性名)
 * @param {Function} filterFunction Function to filter nodes.(筛选节点的函数)
 * @param {Tree2ArrayOptions} options Setting options.(设置选项)
 *    - isGenerateLevel: Whether to generate level,default false.(是否生成层级)
 *    - generateLevelAttributeName: Specify the attribute name of the generated level.(指定生成的层级的属性名称)
 *    - isGenerateParentID: Whether to generate parent node ID,default false.(是否生成父节点ID)
 *    - generateParentIDAttributeName: Specify the attribute name of the generated parent node ID.(指定生成的父节点ID的属性名称)
 *    - nodeIDAttributeName: Attribute name of node ID.(节点ID的属性名称)
 *    - deleteAttributeList: pecify the attribute in the node to be deleted.(指定删除节点中的属性)
 * @example
 * const  TreeTool  = require('boots-js/tree-tool'); // Node
 * import * as TreeTool  from 'boots-js/tree-tool' // Es6 Module
 * 
 *    const tree = {
 *          name: '中国',
 *          code: '0',
 *          level: 0,
 *          childList: [
 *            { name: '重庆', code: '01', level:1,  parentCode: '0', childList: [] },
 *            { name: '四川', code: '02', level:1, parentCode: '0', childList: [] },
 *            { name: '广东', code: '03', level:1, parentCode: '0', childList: [] }
 *          ]
 *    }
 *    let arr = TreeTool.filter([tree], 'childList', (obj) => {
 *        return obj.parentCode === '0'
 *    })
 *    console.info(arr)
 *      [
 *        { name: '重庆', code: '01', level:1 , parentCode: '0', childList: [] },
 *        { name: '四川', code: '02', level:1 , parentCode: '0', childList: [] },
 *        { name: '广东', code: '03', level:1 , parentCode: '0', childList: [] },
 *      ]
 */
export function filter(treeList: Array<any>, childListAttributeName: string, filterFunction: (value: any, index: number, array: any[]) => boolean, options: Tree2ArrayOptions = tree2ArrayDefaultOptions) {
    return tree2Array(treeList, childListAttributeName, options).filter(filterFunction)
}
/**
 * Find the path of a node.(查找某节点的路径)
 * @param {Array} treeList Given a list of trees.(给定树的列表)
 * @param {string} nodeIDAttributeName Attribute name of node ID.(节点ID的属性名称)
 * @param {string} nodeID Specify the node ID whose path needs to be obtained.(指定需要获取路径的节点ID)
 * @param {string} childListAttributeName The attribute name of the child node stored in the tree.(树中存放子节点的属性名)
 * @example 
 * const  TreeTool  = require('boots-js/tree-tool'); // Node
 * import * as TreeTool  from 'boots-js/tree-tool' // Es6 Module
 * 
 *    const tree = {
 *          name: '中国',
 *          code: '0',
 *          level: 0,
 *          childList: [
 *            { name: '重庆', code: '01', level:1, parentCode: '0', childList: [] },
 *            { name: '四川', code: '02', level:1, parentCode: '0', childList: [] },
 *            { name: '广东', code: '03', level:1, parentCode: '0', childList: [] }
 *          ]
 *    }
 *    let path = TreeTool.findPath([tree],'code','03','childList')
 *    console.info(path)
 *    [
 *        {
 *          name: '中国',
 *          code: '0',
 *          level: 0,
 *          childList: [ [Object], [Object], [Object] ]
 *        },
 *        { name: '广东', code: '03', parentCode: '0', level: 1, childList: [] }
 *    ]
 * 
 * 
 */
export function findPath(treeList: Array<any>, nodeIDAttributeName: string, nodeID: string, childListAttributeName: string): Array<any> {
    if (!Array.isArray(treeList)) {
        console.warn(`${treeList} is not an Array!`);
        return treeList;
    }
    function DFS(nodeList: Array<any>, pathList: Array<any>): Array<any> {
        if (!Array.isArray(nodeList)) return [];
        for (let node of nodeList) {
            if (node[nodeIDAttributeName] === nodeID) return [...pathList, node]
            const result = DFS(node[childListAttributeName], [...pathList, node])
            if (result?.length > 0) return result;
        }
        return [];
    }
    return DFS(treeList, [])
}
/**
 * Tree to array setting options.(树转数组设置选项)
 */
interface Tree2ArrayOptions {
    /**
     * Whether to generate level.(是否生成层级)
     */
    isGenerateLevel: boolean;
    /**
     * Specify the attribute name of the generated level.(指定生成的层级的属性名称)
     */
    generateLevelAttributeName: string;
    /**
     * Whether to generate parent node ID.(是否生成父节点ID)
     */
    isGenerateParentID: boolean;
    /**
     * Specify the attribute name of the generated parent node ID.(指定生成的父节点ID的属性名称)
     */
    generateParentIDAttributeName: string;
    /**
     * Attribute name of node ID.(节点ID的属性名称)
     */
    nodeIDAttributeName: string;
    /**
     * Specify the attribute in the node to be deleted.(指定删除节点中的属性)
     */
    deleteAttributeList: Array<string>;
}
const tree2ArrayDefaultOptions: Tree2ArrayOptions = {
    isGenerateLevel: false,
    generateLevelAttributeName: "level",
    isGenerateParentID: false,
    generateParentIDAttributeName: "parentID",
    nodeIDAttributeName: "id",
    deleteAttributeList: [],
}

export default {
    tree2Array,
    array2Tree,
    getChildList,
    filter,
    findPath
}