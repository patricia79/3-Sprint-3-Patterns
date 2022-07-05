
class Jugador {

    constructor(nom, puntuacio) {
        this.nom = nom;
        this.puntuacio = puntuacio;
    }

    afegir_punts(punts) {
        this.puntuacio = this.puntuacio + punts;
    }

    treure_punts(punts) {
        this.puntuacio = this.puntuacio - punts;
    }

}

module.exports = Jugador;