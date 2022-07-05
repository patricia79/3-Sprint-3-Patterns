const Item = require('./class_item.js');
const Decorator = require('./class_decorator.js');


// cotxes new Item (name, model, price, currency)
const BMV = new Item('BMV', 'X3', 50000, 'USD');
const Mercedes = new Item('Mercedes', 'GLC', 45000, 'GBP');
const Mazda = new Item('Mazda', 'CX30', 35000, 'CAD');
const Porsche = new Item('Porsche', 'Carrera', 65000, 'CAD');

const Audi = new Item('Audi', 'Q5', 55000, 'EUR'); // error, pq passem de primeres els euros

const BMVX3  = new Decorator(BMV);
const MercedesGLC = new Decorator(Mercedes);
const MazdaCX30  = new Decorator(Mazda);
const PorscheCarrera = new Decorator(Porsche);

BMVX3.converter('EUR');
MercedesGLC.converter('EUR');
MazdaCX30.converter('EUR');
PorscheCarrera.converter('EUR');


PorscheCarrera.converter('USD');// error no euros


