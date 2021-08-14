function power(base, exponent){
    var pow = base;
    
    for (let i = 1; i < exponent; i++) {
        pow = pow * base;
        
        
    }
    
    return pow;
}

console.log(power(5,7));


const getLergerInt = function(number1, number2) {
    return number1>number2? number1: number2;
}

console.log(getLergerInt(10,5))
console.log(getLergerInt(2,7))


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

console.log(fibonacciSequence(5))
console.log(fibonacciSequence(100))