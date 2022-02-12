/*Crear una variable llamada mes y que tenga asignado por defecto el valor 10.
Crear un programa que verifique si el valor de mes está entre 12 y 2 (12, 1 o 2), entonces que imprima en
pantalla "es inviern0", si el valor de mes está entre 3 y 5, que imprima en pantalla "es primavera", si el valor
de mes se encuentra entre 6 y 8 que imprima en pantalla “es verano” y si se encuentra entre 9 y 11 que
imprima en pantalla "es otoño".
Al finalizar debe imprimir en pantalla un mensaje que indique su número de carné y su nombre completo.*/

var mes = 10;
switch(mes){
    case 12:
    case 1:
    case 2:
        alert("es invierno");
        break;
    case 3:
    case 4:
    case 5:
        alert("es primavera");
        break;
    case 6:
    case 7:
    case 8:
        alert("es verano");
        break;
    case 9:
    case 10:
    case 11:
        alert("es otono");
        break;
};
alert("carne: 22001759, Nombre: Eduardo Leonel Marroquin Jimenez");