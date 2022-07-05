class MW {
  constructor() {
    this.middlewares = []; //f1, f2, f3= fn
    this.param = {}; // dentro esta a y b
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  executaMiddlewares(index) {
    if (index < this.middlewares.length) {
      this.middlewares[index](this.param.a, this.param.b, () =>
        this.executaMiddlewares(index + 1)
      );
    }
  }

// callback
suma = (a, b) => {
  this.a = a;
  this.b = b;
  this.executaMiddlewares(0);
  let total = a + b;
  console.log(`El resultat de la suma és: ${total}`);
  return total;
}
  
run = (param, suma) => {


     return {
       run,
       use
     }
}


/*

function resta(a, b) {
  this.a = a;
  this.b = b;
  this.executaMiddlewares(0);
  let total = a - b;
  console.log(`El resultat de la resta és: ${total}`);
  return total;
}

function multiplica(a, b) {
  this.a = a;
  this.b = b;
  this.executaMiddlewares(0);
  let total = a * b;
  console.log(`El resultat de la multiplicació és: ${total}`);
  return total;

*/

module.exports = MW;