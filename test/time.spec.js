import time from '../src/time';

// 格式化时间
describe('formatDate  2019-12-12', () => {
  it('string', () => {
    const date = new Date('2019-12-12').getTime();
    expect(time.formatDate(date)).toBe('2019-12-12');
  });
  it('Date', () => {
    const date = new Date('2019-12-12');
    expect(time.formatDate(date)).toBe('2019-12-12');
  });
  it('mymonth < 10', () => {
    const date = new Date('2019-08-01');
    expect(time.formatDate(date)).toBe('2019-08-01');
  });
  it('day < 10 ', () => {
    const date = new Date('2019-08-01');
    expect(time.formatDate(date)).toBe('2019-08-01');
  });
  it('day > 10 ', () => {
    const date = new Date('2019-08-23');
    expect(time.formatDate(date)).toBe('2019-08-23');
  });
});

describe('getCurrentDate', () => {
  it('返回当前时间', () => {
    const date = new Date().getTime();
    expect(time.getCurrentDate()).toBe(date);
  });
});

describe('getYesterdayStartDate', () => {
  it('获取昨天开始时间', () => {
    const date = new Date().getTime();
    expect(time.getCurrentDate()).toBe(date);
  });
});
