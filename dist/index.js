"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
//Testeo
var impuesto1 = new _impuestos.Impuesto(100000, 10000);
console.log(impuesto1);
var cliente1 = new _cliente.Cliente("Juan", impuesto1);
console.log(cliente1);
console.log(cliente1.calcularImpuesto());