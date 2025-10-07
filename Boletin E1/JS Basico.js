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

console.log("\nEjercicio 9 - Operadores lógicos:");
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

console.log("nEjercicio 13 - Longitud:");
console.log(" + cadena +  tiene " + longitud + " caracteres");
//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.


//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.


//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.


//18. Imprime tu nombre si una varibale tiene su valor


//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos


//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes


//21. Usa switch rehaciendo el ejercicio 20


//22. Crea un listado que almacene cinco elementos.


//23. A ese listado incluye uno al principio y uno al final.


//24. Elimina el último elemento del listado.


//24. Crea un Set que guarde cinco elementos.

//26.Crea un mapa que como clave tenga un numero y como valor el mes.


//27. Crea un bucle que imprima numero del 1 al 10


//28. Crea un bucle que cuente las vocales de una cadena de texto


//29. Usa un bucle para invertir una cadena de texto


//30. Crea un funcion que reciba dos numeros y los sume


//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original


//32. Crea una funcion que reciba un String y devuelva la candena al reves
