
/*
Nivell 2
Singleton
Construeix una aplicació que creï diversos Jugadors. 
Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
L'aplicació ha de poder afegir o treure punts a cada jugador perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.

correcció: Sobre el singleton, no l'acaba d'implementar: la classe només s'ha de poder instanciar un cop, 
sigui amb el mètode que sigui (i ho ha de fer la classe Joc directament). */

let Jugador = require('./Jugador.js');
let Joc = require('./Joc.js');
let Marcador = require('./Marcador.js');


let jugador1 = new Jugador("Pol", 0);
let jugador2 = new Jugador("Gunther", 0);
let jugador3 = new Jugador("Wotan", 0);
let jugador4 = new Jugador("Loge", 0);
let jugador5 = new Jugador("Siegfried", 0);

let marcador0 = Marcador.getInstance();

let joc1 = new Joc("Buscaminas", marcador0);

joc1.jugadors.push(jugador1);
joc1.jugadors.push(jugador2);
joc1.jugadors.push(jugador3);
joc1.jugadors.push(jugador4);
joc1.jugadors.push(jugador5);

jugador1.afegir_punts(20);
jugador1.treure_punts(15);
jugador2.afegir_punts(39);
jugador3.afegir_punts(20);
jugador4.treure_punts(10);
jugador5.afegir_punts(10);

joc1.jugadors.forEach(jugador => {

    console.log(`El jugador ${jugador.nom} té una puntuació de: ${jugador.puntuacio} punts.`);

});

joc1.calcula_guanyador();

console.log(`El guanyador és ${joc1.marcador.guanyador} amb una puntuació total de ${joc1.marcador.puntuacio} punts. `);