// Definición de varios tipos de datos del sistema de marcas
let id: number = 1;
let marca: string = "coca-cola";
let mixta: boolean = true;
let clases: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let productos: { clase: number, productos: string } = { clase: 35, productos: "comprende principalmente los servicios que implican la gestión" };

// Enumeración para representar diferentes tipos de marcas
enum TiposMarcas {
    mr = "Marca de Fábrica y Comercio",
    ms = "Marca de Servicios",
    nc = "Nombre Comercial",
    sp = "Señal de Propaganda",
    em = "Emblema",
    ro = "Rotulo"
}

let tipomar: TiposMarcas = TiposMarcas.mr;

// Uso de tipos any en diferentes situaciones del proceso del registro de la clasificacion de viena
let cviena: any = 100114;
cviena = "10.01.14";

// Uso de tipos unknown en diferentes situaciones del proceso del ingreso de productos
let nclase: unknown = 4;
let tclase: number = nclase as number;

// Tipos de unión e intersección en diferentes situaciones para la clasificacion de viena
type UnionType = number | string;
type IntersectionType = { id: number } & { ccv: string };

let wclase: UnionType = 10;
let wccv: IntersectionType = { id: 1, ccv: "01.02.05" };

// Tipos de colección de leyes
let pleyes: string[] = ["Registro Antiguo","Convenio Centroamericano", "Ley 380"];
let psignos: string[] = ["Denominativa", "Mixta", "Grafia Especial"];
let pclases: [number, string] = [1, "01"];
let sclases: Set<number> = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let pcalidad: Map<string, number> = new Map([["Apoderado", 1], ["Gestor Oficioso", 2]]);