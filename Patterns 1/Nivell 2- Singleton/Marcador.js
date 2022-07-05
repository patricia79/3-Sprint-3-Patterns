    class PrivateMarcadorSingleton {
        constructor() {
            this.puntuacions = 0;
            this.guanyador = null;        }
    }
    class MarcadorSingleton {
        constructor() {
            throw new Error('Utilitza el mètode getInstance() per instanciar');
        }
        static getInstance() {
            if (!MarcadorSingleton.instance) {
                MarcadorSingleton.instance = new PrivateMarcadorSingleton();
            }
            return MarcadorSingleton.instance;
        }
    }
    module.exports = MarcadorSingleton;
