/*Reto 1*/

const time = 1;
let greeting;

if (time <= 0 || time > 24) {
    greeting = 'Hora invalida en este planeta'
}else{
    if (time < 12) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good afternoon";
    } else if (time >= 20) {
        greeting = "Good evening";
    }
}

console.log(greeting)


/*Reto2*/
const pares = [];

for (let i = 1; i < 101; i++) {
    (i % 2) == 0 ? pares.push(i): "";
}
console.log(pares);

/*Reto3*/
const primos = [];
function esPrimo(numero){
	for (let x = 2; x < numero ; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

for (let i = 1; i < 101; i++) {
    if(esPrimo(i)){
        primos.push(i);

    }
}



console.log(primos);

/*
function Reto(Diametro, grosor){
    if(1.4 < Diametro > 0.8){
        if(grosor < 0.8){
            console.log("El grosor para esta rueda es inferior al recomendado");
        }
        console.log("La rueda es para un vehículo grande");
    }else if((Diametro > 1.4 && grosor < 0.4)){
        console.log("El grosor para esta rueda es inferior al recomendado")
    }
    else{
        console.log("rueda para un vehiculo pequeño")
    }
}
*/
