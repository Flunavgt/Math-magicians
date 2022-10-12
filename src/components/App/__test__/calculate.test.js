import calculate from '../../../logic/calculate';

describe('calculate', () => {
  it('Testing AC', () => {
    const obj = '';
    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('testing', () => {
    const object = { total: '', next: '0', operation: '' };
    const buttonName = '0';
    const answer = calculate(object, buttonName);

    expect(answer).toEqual({});
  });

  it('testing Zero button', () => {
    const obj = '0';
    const buttonName = '0';
    expect(calculate(obj, buttonName)).toEqual({
      next: '0',
      total: null,
    });
  });
});
