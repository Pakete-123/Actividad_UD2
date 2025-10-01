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

/*
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

//Creamos las variables necesarias
var pags_bn = prompt("¿Cuántas páginas quiere en blanco y negro?"), pags_c = prompt("¿Cuántas páginas quiere a color?");


//Verificamos que el dato introducido sea un número, si no devuelve null
function isNum(x) {
    const NUM = Number(x);
    return Number.isNaN(NUM) ? null : NUM;
}


const BN = pags_bn.value, C = pags_c.value

function suma_bn(x) {
   const N = isNum(x);
   return (N === null) ? null : N * PRECIO_BN_A4;
}

function suma_c(x) {
   const N = isNum(x);
   return (N === null) ? null : N * PRECIO_COLOR_A4;
}

if (BN) {}


