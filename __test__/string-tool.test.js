const { StringTool } = require('../dist/string-tool');
const BootsJS=require('../dist/index');


test('test StringTool class', () => {
    expect(StringTool.dashNameToUpperCamelCaseName('string-tool')).toBe('StringTool');
    expect(StringTool.camelCaseNameToDashName('StringTool')).toBe('string-tool');
    expect(StringTool.trim(' StringTool',StringTool.trimOptions.leading)).toBe('StringTool');
    expect(StringTool.trim('StringTool ',StringTool.trimOptions.trailing)).toBe('StringTool');
    expect(StringTool.trim(' StringTool ',StringTool.trimOptions.side)).toBe('StringTool');
    expect(StringTool.trim(' String Tool ')).toBe('StringTool');
});