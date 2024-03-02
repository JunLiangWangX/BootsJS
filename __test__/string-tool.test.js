const { StringTool } = require('../dist/string-tool');
const BootsJS=require('../dist/index');


test('test StringTool class', () => {
    expect(StringTool.dashNameToUpperCamelCaseName('string-tool')).toBe('StringTool');
    expect(BootsJS.StringTool.camelCaseNameToDashName('StringTool')).toBe('string-tool');
    expect(BootsJS.StringTool.trimLeft(' StringTool')).toBe('StringTool');
    expect(BootsJS.StringTool.trimRight('StringTool ')).toBe('StringTool');
    expect(BootsJS.StringTool.trimSide(' StringTool ')).toBe('StringTool');
    expect(BootsJS.StringTool.trimAll(' String Tool ')).toBe('StringTool');
});