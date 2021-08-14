function flatten(arrays) {
    return arrays
    .reduce(function(a,b) {
        return a.concat(b);
    });
}


const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);
console.log(array);

function compact(array) {
    return array.filter(array => array!=false) 
}

const array2 = [0, 1, false, 2, '', 3];
const compactedArray = compact(array2);
  
console.log(compactedArray); // [1, 2, 3]

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }

const test = function(n) {
    return n > 0;
}
  
const update = function(n) {
    return n - 1;
}
  
loop(3, test, update, console.log);



const estudiantes = [
    { nombre: 'Pedro', calif: 5, grupo: 'A' },
    { nombre: 'Pablo', calif: 8, grupo: 'B' },
    { nombre: 'Alexis', calif: 2, grupo: 'A' },
    { nombre: 'Oscar', calif: 4, grupo: 'C' },
    { nombre: 'Arturo', calif: 7, grupo: 'C' },
    { nombre: 'Juan', calif: 5, grupo: 'A' },
    { nombre: 'José', calif: 6, grupo: 'B' },
    { nombre: 'Cesar', calif: 5, grupo: 'A' },
    { nombre: 'Rodolfo', calif: 7, grupo: 'C' },
    { nombre: 'Arturo', calif: 9, grupo: 'C' },
    { nombre: 'Diego', calif: 8, grupo: 'A' },
    { nombre: 'Esteban', calif: 6, grupo: 'B' },
    { nombre: 'Julio', calif: 6, grupo: 'A' },
    { nombre: 'Ciro', calif: 7, grupo: 'C' }
];

function gruposAprobados(estu,g) {
    aux =  estu.filter(estu => estu.grupo == g && estu.calif > 5.9)
    aux['Promedio'] = aux.reduce(((param,aux) => param+aux.calif),0)/aux.length;
    return aux
}

console.log(gruposAprobados(estudiantes,'A'));
console.log(gruposAprobados(estudiantes,'B'));
console.log(gruposAprobados(estudiantes,'C'));
/*
return grupoA; // Estudiantes grupo A aprobados [ { nombre: 'Diego', calif: 8, grupo: 'A' }, ..., {Promedio: ** } ]
return grupoB; // Estudiantes grupo B aprobados [ { nombre: 'Pablo', calif: 8, grupo: 'B' }, ..., {Promedio: ** } ]
return grupoC; // Estudiantes grupo C aprobados [ { nombre: 'Arturo', calif: 7, grupo: 'C' }, ..., {Promedio: ** } ]
*/