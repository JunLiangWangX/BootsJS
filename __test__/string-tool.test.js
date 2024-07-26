const  StringTool  = require('../dist/cjs/string-tool');
const BootsJS=require('../dist/cjs/index');


test('test StringTool class', () => {
    expect(StringTool.dashNameToUpperCamelCaseName('string-tool')).toBe('StringTool');
    expect(StringTool.camelCaseNameToDashName('StringTool')).toBe('string-tool');
    expect(StringTool.trim(' StringTool',StringTool.TrimOptions.leading)).toBe('StringTool');
    expect(StringTool.trim('StringTool ',StringTool.TrimOptions.trailing)).toBe('StringTool');
    expect(StringTool.trim(' StringTool ',StringTool.TrimOptions.side)).toBe('StringTool');
    expect(StringTool.trim(' String Tool ')).toBe('StringTool');
});