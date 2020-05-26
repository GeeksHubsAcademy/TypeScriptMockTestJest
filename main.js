"use strict";
exports.__esModule = true;
var superheroes_1 = require("./service/superheroes");
function main() {
    console.log("Entry point");
    var superheroes = new superheroes_1.Superheroes();
    var list = superheroes.list();
    console.log(JSON.stringify(list));
}
main();
