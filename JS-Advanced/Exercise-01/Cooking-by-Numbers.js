function cookingByNumbers(n, e1, e2, e3, e4, e5) {
    let operations = [];
    let number = Number(n);
    operations.push(e1, e2, e3, e4, e5);

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "chop") {
            number /= 2;
        }else if (operations[i] === "dice") {
            number = Math.sqrt(number);
        }else if (operations[i] === "spice") {
            number++;
        }else if (operations[i] === "bake") {
            number *= 3;
        }else if (operations[i] === "fillet") {
            number -= (number * 0.20);
        }
        
        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',

'fillet');