"use strict";
/*
  Presupuestador de Copistería — UD2 (Plantilla mínima)
  Entorno: navegador (prompt/alert + consola). Sin arrays ni librerías.
  Reglas: operar INTERNAMENTE en céntimos; mostrar a 2 decimales.
  Orden de cálculo obligatorio: DESCUENTO → URGENCIA → IVA.
*/

/* =========================
   0) PARÁMETROS (constantes)
   ========================= */
const IVA = 0.21;                  // 21%
const PRECIO_BN_A4 = 0.05;         // €/pág B/N (A4)
const PRECIO_COLOR_A4 = 0.20;      // €/pág Color (A4)
const RECARGO_A3_FACTOR = 1.5;     // A3 = A4 × 1.5
const FACTOR_DOBLE_CARA = 0.9;     // Doble cara = × 0.9
const PRECIO_ENCUADERNACION = 3.00;// € por encuadernación
const RECARGO_URGENCIA = 0.15;     // +15% (si urgente)
const UMBRAL1 = 30, DTO1 = 0.05;   // ≥30€ → 5%
const UMBRAL2 = 60, DTO2 = 0.10;   // ≥60€ → 10%

/* ==========================================================
   P S E U D O C Ó D I G O   D E   L O   Q U E   H A Y   Q U E   H A C E R
   ==========================================================

/* TIENEN QUE SER CÉNTIMOS, NO EUROS
PRESUPUESTADOR (UD2) — GUION 
Objetivo:
- Solicitar datos de un encargo de copistería y presentar un presupuesto desglosado.

Entradas:
- Cantidad de páginas en blanco y negro.
- Cantidad de páginas en color.
- Tamaño del papel (A4 o A3).
- Si la impresión es a doble cara.
- Número de encuadernaciones.
- Si el trabajo es urgente.

Validación y normalización:
- Convertir los datos introducidos a los tipos adecuados.
- Asegurar que los valores numéricos y no numéricos son válidos para realizar los cálculos.

Reglas de negocio a aplicar:
1) Determinar el precio por página según tipo (BN/Color), tamaño (A4/A3) y si es doble cara.
2) Obtener el coste total de las páginas y el de las encuadernaciones.
3) Calcular el subtotal base del trabajo.
4) Aplicar el descuento y recargo si corresponden.
6) Calcular los impuestos y el importe final a pagar.

Precisión y formato:
- Realizar todas las operaciones internas con una unidad de valor sin decimales.
- Mostrar los importes con dos posiciones decimales en la salida.

Salida (consola + alert):

Restricciones técnicas:
- Trabajo en navegador, sin usar librerías externas ni estructuras de datos avanzadas.
- Estructurar la solución en funciones simples y con nombres claros.
- Mantener comentarios breves que expliquen la finalidad de cada parte.

Comprobación mínima:
- Probar al menos un caso sin descuento ni urgencia.
- Probar al menos un caso con descuento y con urgencia, verificando que el orden indicado modifica el resultado.
*/


//Creamos las funciones
function cents(x) {
   return Math.round(x * 100);
}

function eur(x) {
   return (x / 100).toFixed(2);
}

function suma_bn(x, y) {
   if (y === "Y") {
      factorA3(x);
   } 
   return (x === null) ? null : cents(x * PRECIO_BN_A4);
}

function suma_c(x, y) {
   return (x === null) ? null : cents(x * PRECIO_COLOR_A4);
}

function factorA3(x){
   return (x === null || x !== "Y") ? "N" : cents(x * RECARGO_A3_FACTOR);
}

function encuadernaciones(x){
   return (x === null) ? null : cents(x * PRECIO_ENCUADERNACION);
}

function urgencia(x){
   return (x === null) ? null : cents(x * RECARGO_URGENCIA);
}

function doble(x) {
   return (x === null) ? null : cents(x *= FACTOR_DOBLE_CARA);
}


//Creamos las variables necesarias y las pedimos con prompt
var pags_bn = Number(prompt("¿Cuántas páginas quiere en blanco y negro?")),
   pags_c = Number(prompt("¿Cuántas páginas quiere a color?")),
   a3_bn = a3_c = enc_c = enc_bn = doble_c = urg = null,
   subtotal = 0, it = 0;
//Creamos los condicionales para sumar al subtotal la suma correspondiente
if (pags_bn > 0){
   
   a3_bn = String.prototype.toUpperCase(prompt("¿Quiere que sea papel DIN A3 en las copias Blanco y Negro? (Y/N)"));
   subtotal += suma_bn(pags_bn, a3_bn);
   enc_bn = Number(prompt("Introduce cuántas encuadernaciones quiere en Blanco y Negro"));

   if (enc_bn > 0){
      subtotal += encuadernaciones(enc_bn);
   } 
} 
if (pags_c > 0){

   a3_c = String(prompt("¿Quiere que sea papel DIN A3 en las copias a Color? (Y/N)").toUpperCase);
   subtotal += suma_c(pags_c, a3_c);
   enc_c = Number(prompt("Introduce cuántas encuadernaciones quiere a Color"));

   if (enc_c > 0){
      subtotal += encuadernaciones(enc_c);
   } 
} 

doble_c = String(prompt("¿Quiere que sean copias a doble cara? (Y/N)").toUpperCase),
urg = String(prompt("¿Lo necesita con urgencia? (Y/N)").toUpperCase);

if (doble_c === "Y"){
   subtotal += doble(subtotal);
} else {
   doble_c = "N";
}
if (subtotal >= cents(UMBRAL2)) {
   subtotal -= subtotal * DTO2;
   it = 2;
} else if (subtotal >= cents(UMBRAL1)) {
   subtotal -= subtotal * DTO1;
   it = 1;
}
if (urg === "Y"){
   subtotal += urgencia
} else {
   urg = "N";
}

let iva = subtotal * IVA;
let total = subtotal + iva;

console.log(`========Recibo Copisterias Pablete y Rafael========\n
   Nº Factura: ${Math.floor(Math.random() * (9999999 - 1 + 1) + 1)}
   Páginas en blanco y negro: ${pags_bn}\n
   Páginas a color: ${pags_c}\n
   Páginas en doble cara: ${doble_c}\n
   Páginas en formato A3 en blanco y negro: ${a3_bn}\n
   Páginas en formato A3 en color: ${a3_c}\n
   Encuadernaciones en blanco y negro: ${enc_bn}\n
   Encuadernaciones a color: ${enc_c}\n
   Envio urgente: ${urg}\n`);

if (it === 1) {
   console.log(`Descuento Aplicado: ${DTO1 * 100}%`);
} else if (it === 2) {
   console.log(`Descuento Aplicado: ${DTO2 * 100}%`);
} else {
   console.log("Descuento Aplicado: Ninguno");
}

console.log(`Base Imponible: ${subtotal}\n
   %IVA: ${IVA}\n
   Importe IVA: ${iva}\n
   ------------------------------------------\n
   Total Factura: ${total}`)

alert(`Total Factura: ${total}`);