function sumFirstLast(arr) { 
    let firstNum = arr.shift();
    let lastNum = arr.pop();

    let sum = Number(firstNum) + Number(lastNum);
    return sum;
}

sumFirstLast(['20', '30', '40']);
