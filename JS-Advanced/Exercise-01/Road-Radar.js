function roadRadar(speed, area){
    let currentKph = Number(speed);
    let limit = 0;
    let status = "speeding";

    switch(area) {
        case 'motorway':
            limit = 130;
            if(currentKph > limit) {
                let difference = currentKph - limit;
                if(difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else if(difference <= 40) {
                    status = "excessive speeding";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else {
                    status = "reckless driving";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }
                
            }else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            break;
        case 'interstate':
            limit = 90;
            if(currentKph > limit) {
                let difference = currentKph - limit;
                if(difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else if(difference <= 40) {
                    status = "excessive speeding";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else {
                    status = "reckless driving";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }
                
            }else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            break;
        case  'city':
            limit = 50;
            if(currentKph > limit) {
                let difference = currentKph - limit;
                if(difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else if(difference <= 40) {
                    status = "excessive speeding";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else {
                    status = "reckless driving";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }
                
            }else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            break;
        case 'residential':
            limit = 20;
            if(currentKph > limit) {
                let difference = currentKph - limit;
                if(difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else if(difference <= 40) {
                    status = "excessive speeding";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }else {
                    status = "reckless driving";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }
                
            }else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            break;

    }
}

roadRadar(200, 'motorway');