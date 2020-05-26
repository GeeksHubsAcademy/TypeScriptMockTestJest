import { CalculadoraAvanzada } from './service/calculadora-avanzada';
import { Calculadora } from './service/calculadora';

jest.mock('./service/calculadora');

const calculadoraMocked = Calculadora as jest.MockedClass<typeof Calculadora>;

describe('Calculadora full mock', () => {
  beforeEach(() => {
    calculadoraMocked.mockClear();
  });

  test('should check constructor is called', () => {
    new CalculadoraAvanzada();
    expect(Calculadora).toBeCalledTimes(1);
  });

  test('should check sum is called', () => {
    const calculadoraAvanzada = new CalculadoraAvanzada();
    const result = calculadoraAvanzada.media(6, 2);
    const mockInstance = calculadoraMocked.mock.instances[0];
    expect(mockInstance.suma).toBeCalledWith(6, 2);
    expect(result).toBe(NaN);
  });

  test('sum should return value', () => {
    const calculadoraAvanzada = new CalculadoraAvanzada();
    const mockInstance = calculadoraMocked.mock.instances[0];

    (mockInstance.suma as jest.Mock).mockImplementation(() => 6);
    const result = calculadoraAvanzada.media(5, 1);

    expect(mockInstance.suma).toBeCalledWith(5, 1);
    expect(result).toBe(3);
  });
});
