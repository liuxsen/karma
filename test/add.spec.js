import add from '../src/add';

describe('第1个测试套件', function() {
  it('第一个测试用例： 1+1 === 2', function() {
    expect(add(1, 1)).toBe(2);
  });
  it('第2个测试用例： 1+ undefined === 2', function() {
    expect(add(1, undefined)).toBe(1);
  });
  it('第2个测试用例： undefined + 1 === 1', function() {
    expect(add(undefined, 1)).toBe(1);
  });
});
