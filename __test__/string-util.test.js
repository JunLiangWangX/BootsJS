const  StringUtil  = require('../dist/cjs/string-util');
const BootsJS=require('../dist/cjs/index');


test('test StringUtil class', () => {
    expect(StringUtil.dashNameToUpperCamelCaseName('string-util')).toBe('StringUtil');
    expect(StringUtil.camelCaseNameToDashName('StringUtil')).toBe('string-util');
    expect(StringUtil.trim(' StringUtil',StringUtil.TrimOptions.leading)).toBe('StringUtil');
    expect(StringUtil.trim('StringUtil ',StringUtil.TrimOptions.trailing)).toBe('StringUtil');
    expect(StringUtil.trim(' StringUtil ',StringUtil.TrimOptions.side)).toBe('StringUtil');
    expect(StringUtil.trim(' String Util ')).toBe('StringUtil');
});