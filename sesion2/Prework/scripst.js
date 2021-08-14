

const p = document.querySelector('p')
for(var i = 0; i<=50; i++){
    console.log(i);
    setInterval(() => p.textContent = i, 1000);
}

 
function timer(){
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('tiempo').innerHTML=sec;
        sec++;
        if (sec > 50) {
            clearInterval(timer);
        }
    }, 50);
}

timer();

/*

var residuo = 10 % 2;
console.log( residuo ); // 0 | 10 es par

var residuo = 7 % 2;
console.log( residuo ); // 1 | 7 es impar



for(var i = 0; i <= 50; i++) {
    if( i % 2 !== 0 ) {
      console.log( i );
    }
  }
*/
