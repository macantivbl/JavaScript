/*Ejercicio 1*/
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof (a) == 'object' && typeof (b) == 'object') {
        for (var x in a) {
            if (deepEqual(a[x], b[x]) == false) {
                return false
            }
        }
        return true;
    }

    return false;
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}


console.log('E1 Test 1:', deepEqual(1, 1)) // true
console.log('E1 Test 2:', deepEqual(1, '1')) // false
console.log('E1 Test 3:', deepEqual(john, john)) // true
console.log('E1 Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('E1 Test 5:', deepEqual(john, { firstName: 'John' })) // false

/*Ejercicio2*/

var data = [1, 2, 3, 4, 5, 6, 7, 8];

function chunk(arr, size) {
    const res = [];
    for (x = 0; x < arr.length; x += size) {
        const aux = arr.slice(x, x + size);
        res.push(aux);
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('E2 Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('E2 Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('E2 Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

/*ejecicio 3*/

function frequency(pal) {
    let homogeneo = new Set();
    
    /*Convertimos pal en arreglo para poder ser iterada*/
    arreglo = Array.from(pal);
    arreglo.sort();

    /*agregamos los elementos de pal => arreglo
    si alguno esta repetido este es descartado
    solo hay un elemento de su tipo en el arreglo*/
    arreglo.forEach(element => {
        homogeneo.add(element);
    });

    /*se crea un diccionario para almacenar los valores*/
    var dict = {

    };


    /*Decimos cuantas veces se repite la letra
    arreglo vs homogeneo*/
    homogeneo.forEach(element => {
        const x = arreglo.filter(x => x === element).length

        dict[element] = x;
        /*
        console.log(element," se repite: ",x," veces");
        */
    });
    return dict;
}

console.log('E3 Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('E3 Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('E3 Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
