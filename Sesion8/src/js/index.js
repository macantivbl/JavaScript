import '../styles.css';

function flatten(arrays) {
    return arrays
    .reduce(function(a,b) {
        return a.concat(b);
    });
}


const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);
console.log(array);