const { ObjectTool } = require('../dist/object-tool');
const BootsJS = require('../dist/index');


test('test DateTool class', () => {
    expect(ObjectTool.type(123)).toBe('Number');
    expect(ObjectTool.type(true)).toBe('Boolean');
    expect(ObjectTool.type('String')).toBe('String');
    expect(ObjectTool.type(new Map())).toBe('Map');
    expect(ObjectTool.type(new Array())).toBe('Array');
    expect(ObjectTool.type(new ArrayBuffer())).toBe('ArrayBuffer');
});
