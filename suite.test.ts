import * as calculadoraAvanzada from './service/calculadora-avanzada';
import suma from './service/calculadora';

jest.mock('./service/calculadora');

const mockSum = suma as jest.MockedFunction<typeof suma>;

describe('Calculadora avanzada tests', () => {
  beforeEach(() => mockSum.mockReset());

  test('mock suma no está implementado', () => {
    const result = calculadoraAvanzada.media(4, 2);
    expect(mockSum).toBeCalledWith(4, 2);
    expect(result).toBe(NaN);
  });

  test('mock suma está implementado', () => {
    mockSum.mockReturnValue(6);
    const result = calculadoraAvanzada.media(1, 5);
    expect(mockSum).toBeCalledWith(1, 5);
    expect(result).toBe(3);
  });
});
