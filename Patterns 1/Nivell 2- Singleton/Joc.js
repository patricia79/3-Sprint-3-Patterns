class Joc  {

    constructor(nom, marcador) {
        this.nom = nom;
        this.jugadors = [];
        this.marcador = marcador;
    }

    calcula_guanyador() {
        let guanyador = 0;
        let nom_guanyador = null;
        for (let index = 0; index < this.jugadors.length; index++) {
            if (this.jugadors[index].puntuacio > guanyador) {
                guanyador = this.jugadors[index].puntuacio;
                nom_guanyador = this.jugadors[index].nom;
            };
        }
        this.marcador.puntuacio = guanyador;
        this.marcador.guanyador = nom_guanyador;
    }
  }

  module.exports = Joc;