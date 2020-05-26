import { CalculadoraAvanzada } from './service/calculadora-avanzada';

describe('Calculadora avanzada tests', () => {
  test('should return mocked sum', () => {
    const mockSum = {
      suma: jest.fn(() => 6),
      resta: jest.fn(),
      multiplicacion: jest.fn(),
      division: jest.fn(),
    };
    const calculadoraAvanzada = new CalculadoraAvanzada(mockSum);

    expect(calculadoraAvanzada.media(1, 1)).toEqual(3);
    expect(mockSum.suma).toBeCalledTimes(1);
  });
});
