//1. Escribe un comentario en una linea
// Este es un comentario en una linea
//2. Escribe un comentario en varias lineas
/* Este es un comentario
en varias lineas */
//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola
let numero = 42; 
let nombre = "Hola, mundo!";
let booleano = true;
let nulo = null;
let indefinido = undefined;
let objeto = { nombre: "Sergi", edad: 21 };
let array = [1, 2, 3, 4, 5];
let simbolo = Symbol("simbolo");

console.log("Número:", numero);
console.log("Texto:", nombre); 
console.log("Booleano:", booleano);
console.log("Nulo:", nulo);
console.log("Indefinido:", indefinido);
console.log("Objeto:", objeto);
console.log("Array:", array);
console.log("Símbolo:", simbolo);

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.
numero = 100;
nombre = "Nuevo texto";
booleano = false;
nulo = "Ahora no es nulo";
indefinido = "Ahora tiene valor";
objeto = { nombre: "Sergi", edad: 21  };
array = [10, 20, 30];
simbolo = Symbol("nuevo simbolo"); 
//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.
const Numero = 95;
const Nombre = "Constante texto";
const Booleano = false;
const Nulo = null;
const Indefinido = undefined;
const Objeto = { nombre: "Sergi", edad: 21 }
const Array = [5, 10, 15];
const Simbolo = Symbol("constante simbolo");

console.log("Número:", Numero);
console.log("Texto:", Nombre); 
console.log("Booleano:", Booleano);
console.log("Nulo:", Nulo);
console.log("Indefinido:", Indefinido);
console.log("Objeto:", Objeto);
console.log("Array:", Array);
console.log("Símbolo:", Simbolo);
//6. Crea una variable para cada operador aritmetico y muestra su resultado en la consola.
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 10 % 3;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
decremento = 10;
decremento--;
console.log("Decremento:", decremento);
incremento = 10;
incremento++;
console.log("Incremento:", incremento);

//7. Crea una variable para cada operador de asignacion y muestra su resultado en la consola.
let asignacion = 10;
asignacion += 5; 
console.log("Asignación +=", asignacion);
asignacion -= 3;
console.log("Asignación -=", asignacion);
asignacion *= 2;
console.log("Asignación *=", asignacion);
asignacion /= 4;
console.log("Asignación /=", asignacion);
asignacion %= 3;
console.log("Asignación %=", asignacion);

//8. Crea una variable para cada operador de comparacion y muestra su resultado en la consola.
let igual = 5 == "5";
let estrictamenteIgual = 5 === "5";
let diferente = 5 != "5";
let estrictamenteDiferente = 5 !== "5";
let mayorQue = 10 > 5;
let menorQue = 10 < 5;

console.log("Ejercicio 8 - Operadores de comparación:");
console.log('5 == "5":', igual);
console.log('5 === "5":', estrictamenteIgual);
console.log('5 != "5":', diferente);
console.log('5 !== "5":', estrictamenteDiferente);
console.log("10 > 5:", mayorQue);
console.log("10 < 5:", menorQue);

//9. Crea una variable pcon un operador lógico y muestra su resultado en la consola.(AND y OR)
let and = (5 > 3) && (10 < 15);
let or = (5 > 10) || (10 < 15);

console.log("Ejercicio 9 - Operadores lógicos:");
console.log("(5 > 3) && (10 < 15):", and);
console.log("(5 > 10) || (10 < 15):", or);

//10. Crea una variable con un operador ternario y muestra su resultado en la consola.
let edad = 18;
let puedeVotar = edad >= 18 ? "Puede votar" : "No puede votar";

console.log("Ejercicio 10 - Operador ternario:");
console.log("Edad:", edad, "-", puedeVotar);

//11. Concatena dos cadenas de texto y muestra el resultado en la consola.
let saludo = "Hola";
let nom = "María";
let mensaje = saludo + " " + nom;

console.log("Ejercicio 11 - Concatenación:");
console.log(mensaje);

//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.
let textoMinusculas = "esto es un texto en minusculas";
let textoMayusculas = textoMinusculas.toUpperCase();

//13. Muestra la longitud de una cadena de texto en la consola.

let cadena = "JavaScript";
let longitud = cadena.length;

console.log("Ejercicio 13 - Longitud:");
console.log(" + cadena +  tiene " + longitud + " caracteres");
//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.

 let frase = "Hola mundo JavaScript";
 let fraseConGuiones = frase.replace(/ /g, "-");
 
 console.log("Ejercicio 14 - Reemplazar espacios:");
 console.log(fraseConGuiones);
//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.

let textoCompleto = "Fernando is faster than you";
let contienePalabra = textoCompleto.includes("Fernando");

console.log("Ejercicio 15 - Contiene palabra:");
console.log(`¿"${textoCompleto}" contiene "Fernando"?`, contienePalabra);
//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.
let ejemplo = "   JavaScript Basico   ";

console.log("Ejercicio 17 - Métodos adicionales:");
console.log("Original:", `"${ejemplo}"`);
console.log("Trim:", `"${ejemplo.trim()}"`);
console.log("Slice(3, 10):", `"${ejemplo.slice(3, 10)}"`);
console.log("Split:", ejemplo.trim().split(" "));

//18. Imprime tu nombre si una varibale tiene su valor
let miNombre = "Sergio";
if (miNombre) {
    console.log("Ejercicio 18 - Mi nombre es:", miNombre);
}

//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos
let usuario = "admin";
let contraseña = "1234";

if (usuario === "admin" && contraseña === "1234") {
    console.log("Ejercicio 19 - Acceso permitido");
} else {
    console.log("Ejercicio 19 - Acceso denegado");
}

//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes
let mes = 10; 
let estacion;

if (mes >= 3 && mes <= 5) {
    estacion = "Primavera";
} else if (mes >= 6 && mes <= 8) {
    estacion = "Verano";
} else if (mes >= 9 && mes <= 11) {
    estacion = "Otoño";
} else {
    estacion = "Invierno";
}

console.log("Ejercicio 20 - Estación:");
console.log(`Mes ${mes}: ${estacion}`);

//21. Usa switch rehaciendo el ejercicio 20

let mesSwitch = 10;
let estacionSwitch;

switch (mesSwitch) {
    case 12:
    case 1:
    case 2:
        estacionSwitch = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacionSwitch = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacionSwitch = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacionSwitch = "Otoño";
        break;
    default:
        estacionSwitch = "Mes inválido";
}

console.log("Ejercicio 21 - Switch estaciones:");
console.log(`Mes ${mesSwitch}: ${estacionSwitch}`);
//22. Crea un listado que almacene cinco elementos.
let listFruta = ["manzana", "platano", "naranja", "uva", "pera"];
console.log("Ejercicio 22 - Lista:", listFruta);

//23. A ese listado incluye uno al principio y uno al final.
listFruta.unshift("kiwi");
listFruta.push("mango");
console.log("Ejercicio 23 - Con añadidos:", listFruta);

//24. Elimina el último elemento del listado.
listFruta.pop();
console.log("Ejercicio 24 - Sin último elemento:", listFruta);

//24. Crea un Set que guarde cinco elementos.

let miSet = new Set([1, 2, 3, 4, 5]);
console.log("Ejercicio 25 - Set:", miSet);
//26.Crea un mapa que como clave tenga un numero y como valor el mes.
let mesesMap = new Map();
mesesMap.set(1, "Enero");
mesesMap.set(2, "Febrero");
mesesMap.set(3, "Marzo");
mesesMap.set(4, "Abril");
console.log("Ejercicio 26 - Map meses:");
console.log("Mes 3:", mesesMap.get(3));
console.log("Todos los meses:", mesesMap);
//27. Crea un bucle que imprima numero del 1 al 10
console.log("Ejercicio 27 - Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//28. Crea un bucle que cuente las vocales de una cadena de texto

let textoVocales = "JavaScript es un lenguaje de programación";
let contador = 0;
let vocales = "aeiouáéíóú";

for (let letra of textoVocales.toLowerCase()) {
    if (vocales.includes(letra)) {
        contador++;
    }
}

console.log("Ejercicio 28 - Contar vocales:");
console.log(`"${textoVocales}" tiene ${contador} vocales`);
//29. Usa un bucle para invertir una cadena de texto

let cadenaOriginal = "Hola Mundo";
let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i];
}

console.log("Ejercicio 29 - Invertir cadena:");
console.log("Original:", cadenaOriginal);
console.log("Invertida:", cadenaInvertida);
//30. Crea un funcion que reciba dos numeros y los sume
function sumar(a, b) {
    return a + b;
}

console.log("Ejercicio 30 - Sumar:");
console.log("5 + 3 =", sumar(5, 3));

//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original
function filtrarMayusculas(arrayStrings) {
    return arrayStrings.filter(palabra => {
        return palabra === palabra.toUpperCase() && palabra !== palabra.toLowerCase();
    });
}

let palabras = ["HOLA", "mundo", "JAVASCRIPT", "programación", "PYTHON"];
console.log("Ejercicio 31 - Filtrar mayúsculas:");
console.log("Original:", palabras);
console.log("Mayúsculas:", filtrarMayusculas(palabras));

//32. Crea una funcion que reciba un String y devuelva la candena al reves
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

let textoParaInvertir = "xiaomi";
console.log("Ejercicio 32 - Invertir cadena:");
console.log("Original:", textoParaInvertir);
console.log("Invertida:", invertirCadena(textoParaInvertir));