const FizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  it('3 returns Fizz', () => {
    expect(FizzBuzz(3)).toBe('Fizz');
  });

  it('5 returns Buzz', () => {
    expect(FizzBuzz(5)).toBe('Buzz');
  });

  it('8 returns 8', () => {
    expect(FizzBuzz(8)).toBe(8);
  });

  it('15 returns FizzBuzz', () => {
    expect(FizzBuzz(15)).toBe('FizzBuzz');
  });

  it('18 returns Fizz', () => {
    expect(FizzBuzz(18)).toBe('Fizz');
  });

  it('20 returns Buzz', () => {
    expect(FizzBuzz(20)).toBe('Buzz');
  });
});