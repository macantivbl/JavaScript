/*
function power(base, exponent){
    return Math.pow(base,exponent);
}

function getLergerInt(number1, number2) {
    return Math.max(number1,number2);
}

/*O(n)*/
/*
function fibonacciSequence(limit){
    var a = 0;
    var b = 1;
    const numFibonachi = [];
    for(let i = 0; i <= limit; i++){
        b = b + a;
        a = b - a;
        numFibonachi.push(b);
    }
    return numFibonachi;
}

console.log(power(3,3));
console.log(getLergerInt(98,9));
console.log(fibonacciSequence(100))
*/





function promedio(num) {
    var aux = 0.0;
    num.forEach(element => {
        aux += element;
    });

    return aux / num.length;
}
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]

console.log(promedio(numbers));

/*Reto 2*/
const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

const keys = Object.keys(car)
const pairs = []

for (let i = 0; i < keys.length; i++) {
    pairs.push([keys[i], car[keys[i]]])
}

console.log(pairs)

obj = {}

let iterable = new Map(pairs)
iterable.forEach((j, k) => {
    obj[k] = j;

});

console.log(obj);


/*
objetoCarros = Object.fromEntries(pairs);
console.log(objetoCarros);
*/

/*Reto3 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://johndoe.com'
        },
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        }
    }
}

function redesSociales(dicc) {
    const { facebook: fb, instagram: ig } = dicc.links.social;

    /*
    fb = dicc.links.social.facebook;
    ig = dicc.links.social.instagram;
    */
    return [fb, ig]
}
console.log(redesSociales(person));

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3: [11, 12, 13, 14, 15]
};

var arrAux = [...array1, ...array2, ...calificaciones.array3];

console.log(arrAux);


const primos = [];

function esPrimo(numero) {
    for (let x = 2; x < numero; x++) {
        if (numero % x == 0) return false;
    }
    return true;
}
function sumarPrimos(arr) {
    var primos = 0.0;
    arr.forEach(element => {
        if (esPrimo(element)) {
            primos += element;
        }
    });
    return primos;
}

console.log(sumarPrimos(arrAux));


