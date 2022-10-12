import operate from '../../../logic/operate';

describe('calculate', () => {
  it('testing operate', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('testing minus', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });

  it('testing multiply', () => {
    expect(operate(4, 5, 'x')).toBe('20');
  });

  it('testing div', () => {
    expect(operate(20, 5, '÷')).toBe('4');
  });

  it('testing percent', () => {
    expect(operate(3, 10, '%')).toBe('3');
  });
});
