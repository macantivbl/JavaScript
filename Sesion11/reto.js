function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        console.log(reject);
        promises.forEach(element => {
            element.then(resolve(element).catch(reject => {console.log(reject);   })
           )
        });
    })
  }
  
  function soon(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), 1000)
    })
  }
  
  // Test cases
  promiseAll([])
    .then(results => {
      console.log('Expected result []: ', results)
    })
  
  promiseAll([soon(1), soon(2), soon(3)])
    .then(results => {
      console.log('Expected result [1, 2, 3]: ', results)
    })
  
  promiseAll([soon(1), Promise.reject('X'), soon(3)])
    .then(results => {
      console.log('We should not get here')
    })
    .catch(error => {
      console.log('Expected error X: ', error)
    })

/*Reto 2*/
async function esperameWe(valor) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return valor;
  }
  
  function log(value) {
    esperameWe(value).then(results => console.log(results))
  }
  
  log("hola mundo ")
