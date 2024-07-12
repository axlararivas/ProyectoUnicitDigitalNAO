"use strict";
// Definición de varios tipos de datos diferentes del sistema de marcas
let id = 1;
let marca = "coca-cola";
let mixta = true;
let clases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let productos = { clase: 35, productos: "comprende principalmente los servicios que implican la gestión" };
// Enumeración para representar diferentes tipos de marcas
var TiposMarcas;
(function (TiposMarcas) {
    TiposMarcas["mr"] = "Marca de F\u00E1brica y Comercio";
    TiposMarcas["ms"] = "Marca de Servicios";
    TiposMarcas["nc"] = "Nombre Comercial";
    TiposMarcas["sp"] = "Se\u00F1al de Propaganda";
    TiposMarcas["em"] = "Emblema";
    TiposMarcas["ro"] = "Rotulo";
})(TiposMarcas || (TiposMarcas = {}));
let tipomar = TiposMarcas.mr;
// Uso de tipos any en diferentes situaciones del proceso del registro de la clasificacion de viena
let cviena = 100114;
cviena = "10.01.14";
// Uso de tipos unknown en diferentes situaciones del proceso del ingreso de productos
let nclase = 4;
let tclase = nclase;
let wclase = 10;
let wccv = { id: 1, ccv: "01.02.05" };
// Tipos de colección de leyes
let pleyes = ["Registro Antiguo", "Convenio Centroamericano", "Ley 380"];
let psignos = ["Denominativa", "Mixta", "Grafia Especial"];
let pclases = [1, "01"];
let sclases = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let pcalidad = new Map([["Apoderado", 1], ["Gestor Oficioso", 2]]);
