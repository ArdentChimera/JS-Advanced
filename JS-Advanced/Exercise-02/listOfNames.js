function listOfNames(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    sorted.forEach((el, i )=> {
       console.log(`${i + 1}.${el}` );
    })
}

listOfNames(["John",

"Bob",

"Christina",

"Ema"]);