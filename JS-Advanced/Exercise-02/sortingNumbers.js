function sortingNumbers(arr) {
    let result = [];
    while (arr.length > 0) {
        arr.sort((a, b) => a - b);
        let smallest = arr.shift();
        let biggest = arr.pop();

        result.push(smallest, biggest);
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);