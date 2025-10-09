*===== Proyecto Copistería =====*

Descripción del proyecto:
- Es una página de copistería que calcula los valores introducidos en pantalla a través de alert boxes y devuelve por consola el recibo del costo total de lo que el cliente haya solicitado.

Funcionalidades:

- Cada acción del programa esta dividida en diferentes funciones para, una vez dentro del código, saber que hace cada una.

- Teniendo en cuenta las constantes del enunciado, hacer los cálculos correspondientes, pasándolos de centimos y una vez calculado todo, pasarlo a euros redondeándolo por 2 decimas con un toFixed(2).

NOTA: también se podría utilizar la función Math.round().

Autores:

Pablo Torrecilla Laiglesia.
Rafael Hortelano Hernández.

*=====DEPURACION DEL CODIGO=====*

Funciones (sumaBN y sumaC)
Se han eliminado las funciones de factor a3 y urg.
Cambiado en las funciones del umbral de descuento: toFixed() por Math.round()
Se ha cambiado la forma de como se muestran los datos
Creación de la función verifYN(c) para verificar que sea un dato válido (Y) y si no lo es devolver N
Corregida la factura

*=====Ejemplos=====*
*/Entradas 1/*
    Hojas Blanco y Negro = 10
    Hojas Color = 5
    DIN A3 en Blanco y Negro = Y
    Encuadernaciones en Blanco y Negro = 0
    DIN A3 a Color = N
    Encuadernaciones a Color = 5
    Copias Doble Cara = Y
    Urgencia = N

*/Salida 1/*
    ========Recibo Copisterias Pablo y Rafael========

    Nº Factura: 9114871
    Páginas en blanco y negro: 10

    Páginas a color: 5

    Páginas en doble cara: Y

    Páginas en formato A3 en blanco y negro: Y

    Páginas en formato A3 en color: N

    Encuadernaciones en blanco y negro: 0

    Encuadernaciones a color: 5

    Envio urgente: N
    
    Descuento Aplicado: Ninguno

    Base Imponible: 15.08

    %IVA: 21%
    Importe IVA: 3.17

    ------------------------------------------

    Total Factura: 18.25

*/Entradas 2/*  
    Hojas Blanco y Negro = 5
    Hojas Color = 10
    DIN A3 en Blanco y Negro = Y
    Encuadernaciones en Blanco y Negro = 0
    DIN A3 a Color = Y
    Encuadernaciones a Color = 0
    Copias Doble Cara = N
    Urgencia = Y

*/Salida/*
========Recibo Copisterias Pablo y Rafael========

    Nº Factura: 2702334
    Páginas en blanco y negro: 5

    Páginas a color: 10

    Páginas en doble cara: N

    Páginas en formato A3 en blanco y negro: Y

    Páginas en formato A3 en color: Y

    Encuadernaciones en blanco y negro: 0

    Encuadernaciones a color: 0

    Envio urgente: Y

    Descuento Aplicado: Ninguno
    Base Imponible: 3.89

    %IVA: 21%
    Importe IVA: 0.82

    ------------------------------------------

    Total Factura: 4.71

*/Entradas 3/*
    Hojas Blanco y Negro = 1
    Hojas Color = 1
    DIN A3 en Blanco y Negro = S
    Encuadernaciones en Blanco y Negro = J
    DIN A3 a Color = k
    Encuadernaciones a Color = 0
    Copias Doble Cara = y
    Urgencia = Y

*/Salida/*
    ========Recibo Copisterias Pablo y Rafael========

    Nº Factura: 4201362
    Páginas en blanco y negro: 1

    Páginas a color: 1

    Páginas en doble cara: Y

    Páginas en formato A3 en blanco y negro: N

    Páginas en formato A3 en color: N

    Encuadernaciones en blanco y negro: 0

    Encuadernaciones a color: 0

    Envio urgente: Y

    Descuento Aplicado: Ninguno
    Base Imponible: 0.26

    %IVA: 21%
    Importe IVA: 0.05

    ------------------------------------------

    Total Factura: 0.31