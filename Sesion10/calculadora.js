const input = document.getElementById('text');
const res = document.getElementById("resultado")
const mas = document.getElementsByClassName("boton")[0];
const menos = document.getElementsByClassName("boton")[1];
const div = document.getElementsByClassName("boton")[2];
const mult = document.getElementsByClassName("boton")[3];
const igual = document.getElementsByClassName("boton")[4];
let desicion = 0;
let dato1 = [];
function agregar(dat) {
    var numeros = document.createTextNode(dat)
    res.appendChild(numeros)
}
function limpiar() {
    res.innerHTML = ''
}

mas.addEventListener('click', (event) => {
    limpiar()
    dato1.push(input.value);
    console.log(dato1);
    dato1.forEach(element => {
        agregar(element + " +")
    });
    input.value = ""
    desicion = 1 /*suma*/;
})


igual.addEventListener('click', (event) => {
    limpiar()
    let aux = 0;
    if (desicion == 1) {
        aux = dato1
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }
            );
    }
    console.log(aux);
    agregar(aux)
    input.value = ""

})











