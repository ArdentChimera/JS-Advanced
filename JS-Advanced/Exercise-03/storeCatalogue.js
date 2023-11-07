function storageCatalog(data) {
    let res = {};
    data.sort();
    for (const element of data) {
        let[product, price] = element.split(' : ');
        price = Number(price);
        let splittedString = product.split('');
        let orderWord = splittedString[0];

        let tempObj = {};
        tempObj[product] = price;

        if (!res.hasOwnProperty(orderWord)) {
            res[orderWord] = tempObj;
        }

        res[orderWord][product] = price;
        
    }

    for (const key in res) {
        console.log(`${key}`);
        for (const secondKey in res[key]) {
            console.log(` ${secondKey}: ${res[key][secondKey]}`);
        }
    }
}
storageCatalog(['Appricot : 20.4',
'Fridge : 1500', 
'TV : 1499', 
'Deodorant : 10', 
'Boiler : 300', 
'Apple : 1.25', 
'Anti-Bug Spray : 15', 
'T-Shirt : 10']);