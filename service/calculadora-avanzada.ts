import { Calculadora } from './calculadora';

export class CalculadoraAvanzada {
  private calculadora: Calculadora = new Calculadora();

  public media(a: number, b: number): number {
    return this.calculadora.suma(a, b) / 2;
  }
}
