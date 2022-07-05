/* Nivell 1

Middleware

Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions)
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands incials 
en cadascuna de les operacions. 
Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola 
les modificacions que es van fent als valors abans del resultat final*/

const middle = require("./MWClass");
const app = new middle();
let numeros = require("./parametres.json");
console.log (numeros);

function cubo (a, b, next) {
  let resultado_cubo1 = Math.pow(a, 3);
  let resultado_cubo2 = Math.pow(b, 3);
  console.log( `El cub dels nombres són ${resultado_cubo1} i ${resultado_cubo2}`);
  next()
}

 let cuadrado = (a, b, next)  =>  {
  let resultado_cuadrado1 = Math.pow(a, 2);
  let resultado_cuadrado2 = Math.pow(b, 2);
  console.log( `El quadrat dels nombres són ${resultado_cuadrado1} i ${resultado_cuadrado2}`);
  next()
}

function division (a, b, next) {
  let division1 = a/2;
  let division2 = b/2;
  console.log( `La divisió entre els nombres és ${division1} i ${division2}`);
  next()

}

app.use(cubo);
app.use(cuadrado);
app.use(division);
app.run(suma, numeros) // app.run(suma, {a,b})
//app.resta(a, b)
//app.multiplica(a, b)