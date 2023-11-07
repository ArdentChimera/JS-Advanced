function townsToJSON(array) {
    
    let props = array.shift().replace(/^\s*\|\s*|\s*\|\s*$/g, '').split(/\s+\|\s+/);
    let[town, lat, long] = props;
    let res = [];

    for (const el of array) {
         let cuurTownObj = {};
        let townArr = el.replace(/^\s*\|\s*|\s*\|\s*$/g, '').split(/\s+\|\s+/);
        let currTown = townArr[0]; 
        let currLat = Number(townArr[1]).toFixed(2);
        let currLong = Number(townArr[2]).toFixed(2);
        cuurTownObj[town] = currTown;
        cuurTownObj[lat] = Number(currLat);
        cuurTownObj[long] = Number(currLong);
        res.push(cuurTownObj);
    }

    console.log(JSON.stringify(res));

}

townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);
