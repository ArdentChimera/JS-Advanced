function extractSubsequence(arr) {
    let result = [];
    let biggest = arr.shift();
    result.push(biggest);

    arr.forEach(element => {
       if (element >= biggest) {
        result.push(element);
        biggest = element;
       } 
    });

    return result;
}   

extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);