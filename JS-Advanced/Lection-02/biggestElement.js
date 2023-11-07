function biggestElement(arr) {
    let biggest = 0;
    arr.forEach(row => {
        for (let i = 0; i < row.length; i++) {
            let current = row[i];
            if (current > biggest) {
                biggest = current;
            }
        }
    });

    console.log(biggest);
}

biggestElement([[3, 5, 7, 12], 
                 [-1, 4, 33, 2], 
                 [8, 3, 0, 4]]);