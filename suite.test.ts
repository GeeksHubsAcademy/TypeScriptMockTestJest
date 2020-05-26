import { CalculadoraAvanzada } from './service/calculadora-avanzada';
import { Calculadora } from './service/calculadora';

const mockSum = jest.fn(() => 8);
jest.mock('./service/calculadora', () => ({
  Calculadora: function () {
    return {
      suma: mockSum,
      division: jest.requireActual('./service/calculadora').Calculadora.prototype.division,
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
    let calculadoraAvanzada = new CalculadoraAvanzada();

    expect(calculadoraAvanzada.media(1, 1)).toEqual(4);
    expect(mockSum).toBeCalledTimes(1);
  });

  test('Sum should be mocked but division not', function () {
    let calculadora = new Calculadora();
    let calculadoraAvanzada = new CalculadoraAvanzada();

    expect(calculadora.suma(1, 1)).toEqual(8);
    expect(calculadora.division(10, 2)).toEqual(5);
  });
});
