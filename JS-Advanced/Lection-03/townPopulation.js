function townPopulation(arr) {
    let towns = {};
    for (const el of arr) {
        const [name, population] = el.split(' <-> ');
        if (towns.hasOwnProperty(name)) { 
            towns[name] += Number(population);
        }else {
            towns[name] = Number(population);
        }
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);