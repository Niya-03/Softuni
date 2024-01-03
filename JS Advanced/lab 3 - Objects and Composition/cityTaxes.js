function cityTaxes(name, population, treasury){
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {Math.floor(this.treasury+= (this.population*this.taxRate))},
        applyGrowth(percent) {Math.floor(this.population+= (this.population*(percent/100)))},
        applyRecession(resper) {Math.floor(this.treasury-= this.treasury*(resper/100))},

    }

    return city;
}
const city =
cityTaxes('Tortuga',

7000,

15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
