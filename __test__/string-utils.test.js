const  StringUtils  = require('../dist/cjs/string-utils');
const BootsJS=require('../dist/cjs/index');


test('test StringUtils class', () => {
    expect(StringUtils.dashNameToUpperCamelCaseName('string-utils')).toBe('StringUtils');
    expect(StringUtils.camelCaseNameToDashName('StringUtils')).toBe('string-utils');
    expect(StringUtils.trim(' StringUtils',StringUtils.TrimOptions.leading)).toBe('StringUtils');
    expect(StringUtils.trim('StringUtils ',StringUtils.TrimOptions.trailing)).toBe('StringUtils');
    expect(BootsJS.StringUtils.trim(' StringUtils ',StringUtils.TrimOptions.side)).toBe('StringUtils');
    expect(BootsJS.StringUtils.trim(' String Utils ')).toBe('StringUtils');
});