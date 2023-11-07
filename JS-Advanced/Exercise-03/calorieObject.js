function calorieObj(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i+=2) {
        let key = arr[i];
        let value = arr[i+1];
        result[key] = Number(value);
    }

    console.log(result);
}

calorieObj(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);