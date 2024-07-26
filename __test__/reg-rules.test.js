const  RegRules  = require('../dist/cjs/reg-rules');
const BootsJS=require('../dist/cjs/index');


test('test RegRules class', () => {
    expect(RegRules.chinesePhoneNumberRule.test('18523127384')).toBe(true);
    expect(RegRules.digitsAndLettersRule.test('134Afsv')).toBe(true);
    expect(RegRules.digitsRule.test('18523127384')).toBe(true);
    expect(RegRules.emailRule.test('wjl@gmail.com')).toBe(true);
    expect(RegRules.imageRule.test('test.png')).toBe(true);
    expect(RegRules.videoRule.test('test.mp4')).toBe(true);
    expect(RegRules.audioRule.test('test.mp3')).toBe(true);
    expect(RegRules.uppercaseLettersRule.test('ABC')).toBe(true);
    expect(RegRules.lowercaseLettersRule.test('abc')).toBe(true);
    expect(RegRules.chineseIDCardRule.test('52052219830823283x')).toBe(true);
    expect(RegRules.IPAddressRule.test('192.168.0.1')).toBe(true);
    
    expect(BootsJS.RegRules.chinesePhoneNumberRule.test('28523127384')).toBe(false);
    expect(BootsJS.RegRules.digitsAndLettersRule.test('134!Afsv')).toBe(false);
    expect(BootsJS.RegRules.digitsRule.test('18523s127384')).toBe(false);
    expect(BootsJS.RegRules.emailRule.test('wjlssgmail.com')).toBe(false);
    expect(BootsJS.RegRules.imageRule.test('test.mp4')).toBe(false);
    expect(BootsJS.RegRules.videoRule.test('test.mp3')).toBe(false);
    expect(BootsJS.RegRules.audioRule.test('test.png')).toBe(false);
    expect(BootsJS.RegRules.uppercaseLettersRule.test('AaBC')).toBe(false);
    expect(BootsJS.RegRules.lowercaseLettersRule.test('Aabc')).toBe(false);
    expect(BootsJS.RegRules.chineseIDCardRule.test('52052291830823283x')).toBe(false);
    expect(BootsJS.RegRules.IPAddressRule.test('1292.168.0.1')).toBe(false);
    
});