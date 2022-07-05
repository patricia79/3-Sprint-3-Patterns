/*  Nivell 3
Observer
Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els 
usuaris/es a ells. Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. 
També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge). Crea un Tema 
amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

// usuario emisor: issuing user


const EventEmitter = require('events');

class Emitter extends EventEmitter{};

let emissorEvents = new Emitter();

let arrayUsers  = [];

class User{

    constructor(nameC){
        this.name = nameC;

        for(let object of arrayUsers){
            if (object.name == nameC){
                throw new Error('Ja hi ha un usuari amb aquest nom.');
            }
        }
        arrayUsers.push(this);

    }

    afegirMissatgeATema(theme, message){

        if (!(theme instanceof Theme)){
            return console.log(`El tema ${theme.name} no existeix.`);
        }
        
        for (let iteracio of theme.users){
            if (iteracio == this){
                return emissorEvents.emit('missatge emès a ' + theme.name, this, message);
            }
        }
        console.log(`${this.name} no està subscrit a ${theme.name}.`);
    }

    rebreMissatge(_emissor, theme, message){
        if (this != _emissor){
            console.log(`Rebut per ${this.name} que l'usuari ${_emissor.name} ha publicat a ${theme.name}:`);
            console.log(message);
        }else{
            console.log(`El nostre missatge (${this.name}) ha estat rebut per la resta d'usuaris de ${theme.name}.`);
        }
    }
}

let user0 = new User('Dani');
let user1 = new User('Manuel');

var arrayThemes = [];

class Theme{

    constructor(nameC){
        this.name = nameC;
        this.users = [];

        for(let object of arrayThemes){
            if (object.name == nameC){
                throw new Error('Ja hi ha un tema amb aquest nom.');
            }
        }
        arrayThemes.push(this);

        emissorEvents.on('missatge emès a ' + this.name, (_usuariEmissor, message) => {
            this.imprimirMissatge(_usuariEmissor, message);
        });

    }

    subscriureUsuari(_usuari){

        if (!(_usuari instanceof User)){
            return console.log(`L'usuari ${_usuari.name} no existeix.`);
        }
    
        for (let iteracio of this.users){
            if (iteracio == _usuari){
                return console.log(`${_usuari.name} ja és a ${this.name}.`)
            }
        }
    
        this.users.push(_usuari);
        
        emissorEvents.on('avisa '+_usuari.name+'de '+ this.name, (_emissor, message) => {
            _usuari.rebreMissatge(_emissor, this, message);
        });

        console.log(`S'ha afegit a ${_usuari.name} al tema ${this.name}.`);
    
    }

    imprimirMissatge(_usuariEmissor, message){

        console.log(`L'usuari ${_usuariEmissor.name} ha publicat a ${this.name}:`);
        console.log(message);

        for(let receptor of this.users){
            emissorEvents.emit('avisa '+receptor.name+'de '+ this.name, _usuariEmissor, message);
        }
    }


}

let theme0 = new Theme('Gats');
let theme1 = new Theme('Música');



theme0.subscriureUsuari(user0);

theme1.subscriureUsuari(user0);
theme1.subscriureUsuari(user1);

user0.afegirMissatgeATema(theme0, 'Gats');
user1.afegirMissatgeATema(theme1, 'Música');