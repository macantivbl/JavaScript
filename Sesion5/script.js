/*reto 1*/
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];


function pluck(list, propertyName) {
    
    return list.map(llave => llave[propertyName]);
    /*return list.map(function(llave){
        return llave[propertyName]
    });*/
}

  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]



/*Reto 2*/

 // "(123) 456-7890"
function createPhoneNumber(arr){
    arr = arr.join('')    
    return ("("+arr.substring(0,3)+")"+" "+arr.substring(3,6)+"-"+arr.substring(6))
}

x = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(x);

/*Reto 3*/

function findMissingNumbers(arr){
    arr.sort(function(a, b){return a - b})
    auxFaltante = []

    for (let i = arr[0]; i < arr[arr.length-1]; i++) {
        if(!arr.includes(i)){
            auxFaltante.push(i)
        }
    }
    return auxFaltante
}

y = findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]
console.log(y);

/*reto final*/
/* */
const array1 = ['Hello'];
const mutable = array => {
    const arrAux = [...array];
    arrAux.push('World')
    return arrAux ;
}
console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`);