function smalledstTwo(arr) {
    arr.sort((a, b) => a - b)
    let smallest = arr.slice(0, 2);

    return smallest;
}

smalledstTwo([30, 15, 50, 5]);