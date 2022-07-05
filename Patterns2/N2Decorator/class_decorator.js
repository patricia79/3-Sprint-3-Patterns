
const data = require('./currency_conversions.json');


class Decorator {
    constructor(product) {
        this.product = product;
    };

    getProduct() {
        return this.product;
    };

    converter(currency) {
        try {
            const regex = new RegExp(this.getProduct().currency + '_' + currency);
            const conversion = this.getProduct().price * Object.entries(data).find(n => regex.test(n))[1]

            console.log(`\n--- From ${this.getProduct().currency} to ${currency} ---`);

            console.log(`- ${this.getProduct().name} ${this.getProduct().model} with a price of ${this.getProduct().price} ${this.getProduct().currency} it will cost ${conversion.toFixed(2)} ${currency}.\n`);

        } catch (error) {
            if(currency !== 'EUR'){
                console.log('\n Only euros are converted \n');
            }else if(this.getProduct().currency === 'EUR'){
                console.log("\n Euros cannot be placed as the initial currency.\n")
            }else{
                console.log(`The current currency does not exist.`);
            }
        }
    };
}

module.exports = Decorator;