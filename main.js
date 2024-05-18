//1. FUNCIONES FLECHA

//Conviertelasiguientefunciónenunafunciónflecha:

/* function greetings() {
    return "Hola";
} */

const greetings = () => {
    return 'Hola'
}

//Conviertelasiguientefunciónenunafunciónflechaenlínea:

/* function division(a, b) {
    return a / b;
} */
const division = (a, b) => a / b

//Conviertelasiguientefunciónenunafunciónflecha:

/* function myName(name){
    return `Mi nombre es ${name}`;
} */

const myName = (name) => {
    return `Mi nombre es ${name}`;
}

//Conviertelassiguientesfuncionesenfuncionesflecha:

/* function test2(){
    console.log("Función test 2 ejecutada.");
}
function test1(callback){
    callback();
} */


const test2 = () => {
    console.log("Función test 2 ejecutada.");
}

const test1 = (callback) => {
    return callback();//No estoy seguro si lleva return
}

//2. FOREACH

let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
]

//Creaunarrayconlagentemayorde25añosymuéstraloporconsola.

/* function mayor25(array) {
    const arrayMayor25 = []
    array.forEach((elemento) => {
        console.log(elemento.age);
        if (elemento.age > 25){
            arrayMayor25.push(elemento)
        }
    })
    console.log(arrayMayor25);
}

mayor25(people) */


const mayorDe25 = []
people.forEach((elemento) => {
    if (elemento.age > 25){
        mayorDe25.push(elemento)
    }
})

console.log(mayorDe25);


const empiezaJ = []
people.forEach((elemento) => {
    if (elemento.name.charAt(0) === 'J')
        empiezaJ.push(elemento)
})
console.log(empiezaJ);

//3. MAP

const mayor25_map = []
people.map((value) => {
    if (value.age > 25){
        mayor25_map.push(value)
    }
})
console.log(mayor25_map);

const empiezaJ_map = []
people.map((elemento) => {
    if (elemento.name.charAt(0) === 'J')
        empiezaJ_map.push(elemento)
})
console.log(empiezaJ_map);


const numbers = [ 4, 5, 6, 7, 8, 9, 10]
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const arrayResult = []
numbers.map((numero) => {
    let num_elevado = numero**numero
    arrayResult.push(num_elevado)
})
console.log(arrayResult);

//4. FILTER
const numbers_filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayImpares = numbers_filter.filter((numero) => numero % 2 !== 0)

console.log(arrayImpares);


//


const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
    ]
    /* [
    'Que rico ${plato.name} me voy a comer!',
    'Que rica ${plato.name} me voy a comer!'
    ]
    */
const arrayPlatVeg = foodList.filter((elemento) => 
    elemento.isVeggie === true
)
console.log(arrayPlatVeg);

const sentencias = []
arrayPlatVeg.map((plato) => {
    let sentencia = `Que rico ${plato.name} me voy a comer!`
    sentencias.push(sentencia)
})
console.log(sentencias);

//REDUCE

const numbers_reduce=[39,2,4,25,62]
 //Salida-->483600


const multip = numbers_reduce.reduce((a, b) => a * b)

console.log(multip);