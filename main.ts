import { Calculadora } from './service/calculadora';


function main() {


    console.log("Entry point");

    const _Calculadora = new Calculadora();
    let result = _Calculadora.suma(4,5);
    console.log(result);

}


main()