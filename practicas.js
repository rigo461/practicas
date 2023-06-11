/**Concatenación:

Crea una variable llamada "nombre" que contenga tu nombre. Luego, crea una variable llamada "apellido" que contenga tu apellido. 
Finalmente, crea una variable llamada "nombreCompleto" que concatene tu nombre y apellido y los muestre en la consola.*/

let nombre ="Rigoberto"
let apellido = "Torres"

let nombreCompleto = nombre + " " + apellido 

console.log(nombreCompleto)



/**Operadores en JavaScript (Intermedio):

Crea una función que reciba como parámetro dos números y devuelva el resultado de su suma, su resta, su multiplicación y su división.
Crea una función que reciba un número y devuelva true si es par o false si es impar.
Crea una función llamada pago que reciba dos parámetros de tipo número: 
cantidad y precio. La función debe calcular el precio total de la compra,
teniendo en cuenta que si la cantidad comprada es mayor o igual a 10, se aplicará un descuento del 10% al precio total. 
Luego, muestra el precio total en la consola.

Ejercicio 2:

Crea una función llamada promedio que reciba tres parámetros de tipo número: nota1, nota2 y nota3. 
La función debe calcular el promedio de las tres notas y determinar si el estudiante aprobó o no. 
Para aprobar, el promedio debe ser mayor o igual a 6. 
Si el estudiante aprobó, muestra el mensaje "Aprobado" en la consola, y si no, muestra el mensaje "Reprobado".*/

//1

function operaciones (num1, num2){
    
    let suma = num1+num2;
    let  resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division,
};
    };

const resultado =  operaciones ( 8, 4) 
console.log(resultado.suma)
console.log(resultado.resta)
console.log(resultado.multiplicacion)
console.log(resultado.division)

//2 crea una función que reciba un número y devuelva true si es par o false si es impar.

function numeroParImpar (num){
    if (num % 2 === 0){
        return false
    }
    else {return true }
}
console.log(numeroParImpar(4))
console.log(numeroParImpar(23))

/**3 crea una función llamada pago que reciba dos parámetros de tipo número: 
cantidad y precio. La función debe calcular el precio total de la compra,
teniendo en cuenta que si la cantidad comprada es mayor o igual a 10, se aplicará un descuento del 10% al precio total. 
Luego, muestra el precio total en la consola.*/


function pago (cantidad , precio){


    let precioTotal = cantidad * precio

    if (cantidad >= 10){
    precioTotal = precioTotal * 0.9 }
    
    else {
        precioTotal = precioTotal;
    }

    console.log("El precio total es: " + precioTotal);
}
/**  Crea una función llamada promedio que reciba tres parámetros de tipo número: nota1, nota2 y nota3.  La función debe calcular el promedio de las tres notas y determinar si el estudiante aprobó o no. 
Para aprobar, el promedio debe ser mayor o igual a 6. Si el estudiante aprobó, muestra el mensaje "Aprobado" 
en la consola, y si no, muestra el mensaje "Reprobado"*/


function promedio(nota1, nota2 ,nota3){
let promedio = (nota1 + nota2 + nota3) / 3

if (promedio >= 6){
    return "aprobado"}

    else {return "reprobado"

    }
}
console.log(promedio(4 , 2, 0))


/**Crea una función llamada esPositivo que reciba un número como parámetro y devuelva "positivo" 
si el número es mayor que cero, "negativo" si es menor que cero, y "cero" si es igual a cero.*/

function esPositivo (num){
    if (num > 0) {
        return "positivo"
    }
    else if (num < 0){
        return "negativo"
    }
    else (num === 0)
    {
        return "cero"
    };
};
console.log(esPositivo(54))





/**Crea una función llamada esDivisible que reciba dos números como parámetros y devuelva "divisible" 
si el primer número es divisible entre el segundo número, y "no divisible" si no lo es.*/

function esDivisible (num1,num2){
if (num1 % num2 === 0)
{return "divisible"}
else {return "no divisible"}
}
console.log(esDivisible( 8 , 54))

/**Condicionales:

Crea una función que reciba como parámetro un número y devuelva "positivo" si es mayor a cero, "negativo" si es menor a cero,
y "cero" si es igual a cero.*/

function positivoOnegativo (num){
    if (num >0){
        return "positivo"
    }
    else if(num< 0){
        return "negativo"
    }
    else (num === 0)
    {return "cero"}
}
console.log(ositivoOnegativo(65))


/**Crea una función que reciba como parámetro un número y devuelva true si es mayor a 100, y false si es menor o igual a 100.*/
function mayorOMenor (num){
    if (num > 100 ){return true}
    else {return false}
}
console.log(mayorOMenor(65))
console.log(mayorOMenor(657))






/** Arrays:

Crea un array con los nombres de cinco amigos. Luego, muestra en la consola el segundo nombre.*/
let amigos = ["jose", "chama", "tania","mia", "dana"]
console.log(amigos[1])


/**Crea un array con los números del 1 al 10. Luego, muestra en la consola los números impares del array.*/
let NumerosImpares = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i <NumerosImpares.length ; i++ ){
if (NumerosImpares[i] %2 !== 0){
    console.log(NumerosImpares[i])
}
}


/**Crea una función que reciba un array de números y devuelva la suma de los elementos que se encuentran en posiciones impares.*/

function SumaElementos (arr) {
let suma = 0
for (let i = 1; i< arr.length ; i+= 2){
    suma += arr[i]
}
return suma
}
let imp = SumaElementos ([1,2,3,4,5,6,7,8,9,10])
console.log(imp)


/**Crea un array con 10 números aleatorios entre 1 y 100. Luego, muestra en la consola los números pares del array.*/

let numerosAleatorios = []
for (let i = 0; i < 10 ; i++){
    let numero = Math.floor(Math.random() * 100) + 1;
    numerosAleatorios.push(numero);
}
for (let j=0; j <numerosAleatorios.length ; j++){
if (numerosAleatorios [j] % 2 == 0 ){
    console.log(numerosAleatorios[j])
        }
    }

/**Crea una función que reciba un array de nombres y devuelva un nuevo array con los nombres en orden alfabético.*/

function nombres (arr){
    arr.sort()
    return arr
}
 

/**Crea una función llamada "mayorAmenor"
que reciba un array de números y devuelva el mismo array ordenado de mayor a menor.*/

function mayorAmenor (arr){
    return arr.sort(function(a, b) {
        return b - a;
    }) 
}
let numerosMayorYMenor= []
for (let i = 0 ; i < 5 ; i++){
    let numeros1 = Math.floor(Math.random() * 20);
    numerosMayorYMenor.push(numeros1) 
    console.log (numerosMayorYMenor)
}

    let numerosOrdenados = mayorAmenor(numerosMayorYMenor)
    console.log(numerosOrdenados)

/**Crea una función llamada "multiplosDeCinco" 
que reciba un array de números y devuelva un nuevo array con todos los números que sean múltiplos de 5.*/



function multiplosDeCinco(arr) {
    let multiplos = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
        multiplos.push(arr[i]);
    }
    }
    return multiplos;
}

let numerosAleatorio = [];
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 35);
    numerosAleatorio.push(num);
}

let devolucionDeMultiplos = multiplosDeCinco(numerosAleatorio);
console.log(devolucionDeMultiplos);



/**Crea una función llamada "inversoArray" que reciba un array y devuelva otro array con los mismos elementos pero en orden inverso.*/


function inversoArray (arr) {
return arr.reverse()
}

let arrInverso = []
for (let i = 0; i < 10; i++){
    let numArr = Math.floor(Math.random()*20)
    arrInverso.push(numArr)
}
let devolucionArr = inversoArray(arrInverso)
console.log (devolucionArr)


/**Crea una función llamada "filtrarMayoresAEdad" que reciba un array de objetos con propiedades "nombre" y "edad",
 y devuelva un nuevo array solo con los objetos cuya edad sea mayor o igual a 18. */

function filtrarMayoresAEdad (arr){
let adentro = []
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i].edad >= 28)
    adentro.push(arr[i])
}
return adentro
}
let invitados = [
{nombre : "jesus" , edad : 28},
{nombre : "cande" , edad : 19},
{nombre : "tania" , edad : 21},
{nombre : "maria" , edad : 15},
{nombre : "andres" , edad :12},
];

let invitadosAdentro = filtrarMayoresAEdad(invitados)
console.log(invitadosAdentro)


/**Crea una función que reciba un array de objetos con propiedades "nombre" y "edad", 
 * y devuelva la suma de las edades de todos los objetos.
 */

function sumaEdades (arr){
let sumaDeLosPibes = 0
for (let i = 0; i <arr.length ; i++){
    sumaDeLosPibes += arr[i].edad
    }
    return sumaDeLosPibes
}
let pibes =  [
    {nombre : "jesus" , edad : 28},
    {nombre : "cande" , edad : 19},
    {nombre : "tania" , edad : 21},
    {nombre : "maria" , edad : 15},
    {nombre : "andres" , edad :12},
    ];
    
    let sumadeEdad= sumaEdades(pibes)
    console.log(sumadeEdad)

/**Crea una función llamada "encontrarNumeroMayor" que reciba un array de números y devuelva el número mayor de ese array.*/
function encontrarNumeroMayor (arr){
let mayor = arr[0]
for (let i = 1 ; i < arr.length ; i++){
    if (arr[i]> mayor){
        mayor = arr[i]
    }
}
return mayor 
}
let numeroMayor = []
for ( let i = 0 ; i < 10; i ++ ){
    let numM = Math.floor(Math.random()*20)
    numeroMayor.push(numM)
}
let mayor = encontrarNumeroMayor(numeroMayor)
console.log(mayor)


/**Crea una función llamada "calcularPromedio" que reciba un array de números y devuelva el promedio de todos los números en ese array.*/
function calcularPromedio (arr){
let promedio = 0
for (let i = 1; i < arr.length ; i++){
if (promedio += arr[i] / arr.length){
}
}
return promedio
}
let promedioDe = []
for (let i = 0; i < 10; i++ ){
    let promedioNotas = Math.floor(Math.random()*10)
    promedioDe.push(promedioNotas)
}

let notaFinal = calcularPromedio(promedioDe)
console.log(notaFinal)



