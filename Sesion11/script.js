function startProcess() {
    console.log('Start Phase 1. Wait one second...');
    setTimeout(function () {
      console.log('Phase 1 completed. Wait two seconds...');
      setTimeout(function () {
        console.log('Phase 2 completed. Wait three seconds...');
        setTimeout(function () {
          console.log('Phase 3 completed. Wait four seconds...');
          setTimeout(function () {
            console.log('Phase 4 completed.');
            // More asynchronous calls...
          }, 4000);
        }, 3000);
      }, 2000);
    }, 1000);
  }
/*  
startProcess();
 */

function addOne(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value + 1), 500)
    })
  }
  
  addOne(1)
    .then(result => {
      console.log(result) // 2
      return addOne(result)
    })
    .then(result => {
      console.log(result) // 3
      return Promise.reject('Oops!')
    })
    .catch(err => {
      console.log(err) // Oops!
      return addOne(1)
    })
    .then(result => {
      console.log(result) // 2
      return addOne(result)
    })
    .then(result => console.log(result)); // 3
  

    function foo() {
        return new Promise((resolve, reject) => {
          setTimeout(() => reject('Failed'), 1000)
        })
      }
      
      async function bar() {
        try {
          let result = await foo()
        } catch (e) {
          console.log(e)  
        }
      }
      
      bar()