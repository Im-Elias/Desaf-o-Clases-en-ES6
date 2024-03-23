import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";

//Testeo
let impuesto1 = new Impuesto(100000, 10000);
console.log(impuesto1);
let cliente1 = new Cliente("Juan", impuesto1);
console.log(cliente1);

console.log(cliente1.calcularImpuesto());
