import calculate from "../../../logic/calculate";

describe ('calculate', () => {
  it('Testing addition', () => {
    const obj = '';
    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('testing', () => {
    const object = {total: '', next: '0', operation: '' };
    const buttonName = '0';
    const answer = calculate(object, buttonName);
    console.log(answer);

    expect(answer).toEqual({})
  });

  it('testing button', () => {
    const obj = '0';
    const buttonName = '0';
    expect(calculate(obj, buttonName)).toEqual({
      next:'0',
      total: null,
    });
  } )
})