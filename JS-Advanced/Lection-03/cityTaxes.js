function cityTaxes(name, population, treasury) {
    let record = {};
    record.name = name;
    record.population = population;
    record.treasury = treasury;
    record.taxRate = 10;
    record.collectTaxes = function () {
        record.treasury += record.population * record.taxRate;
    }
    record.applyGrowth = function (percentage) {
        record.population = record.population + (record.population * percentage / 100);
    }
    record.applyRecession = function (percentage) {
        record.treasury = record.treasury - (record.treasury * percentage / 100);
    }

    return record;
}

const city =

cityTaxes('Tortuga',

7000,

15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);