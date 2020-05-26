import { CalculadoraAvanzada } from './service/calculadora-avanzada';

const mockSum = jest.fn(() => 8);
jest.mock('./service/calculadora', () => ({
  Calculadora: function () {
    return {
      suma: mockSum,
    };
  },
}));

describe('CalculadoraAvanzada Testing', () => {
  //   test('First  Test', function () {
  //     var expected = true;
  //     var result = false;
  //     expect(result).toBe(expected);
  //   });

  test('Should return based on mockSum', function () {
    var expected = true;
    var result = false;
    let calculadoraAvanzada = new CalculadoraAvanzada();

    expect(calculadoraAvanzada.media(1, 1)).toEqual(4);
    expect(mockSum).toBeCalledTimes(1);
  });
});
