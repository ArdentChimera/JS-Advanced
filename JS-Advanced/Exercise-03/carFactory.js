function carFactory(data) {
    let model = data.model;
    let power = data.power;
    let color = data.color;
    let carriage = data.carriage;
    let wheelsize = data.wheelsize;


    let res = {
        model: model,
    }

    const engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    if (power <= 90) {
        res.engine = engineEnum["Small engine"]
    }else if (power <= 120) {
        res.engine = engineEnum["Normal engine"]
    }else {
        res.engine = engineEnum["Monster engine"]
    }

    res.carriage = { 
        type: carriage, 
        color: color, 
    }

    
    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }
    
    res.wheels = new Array(4).fill(wheelsize);

   return res;
}

carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 });