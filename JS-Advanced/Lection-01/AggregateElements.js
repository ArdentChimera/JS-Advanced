function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, "", (a, b) => a + b);

    function aggregate(array, initialValue, func) {
        let val = initialValue;
        for(let i = 0; i < array.length; i++) {
            val = func(val, array[i]);
        }
        console.log(val);
    }
}

aggregateElements([1, 2, 3]);