function fruit(typrOfFruit, grams, pricePerKilo) {
    let kilograms = grams / 1000;
    let price = pricePerKilo * kilograms;

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${typrOfFruit}.`);
}

fruit('apple', 1563, 2.35);