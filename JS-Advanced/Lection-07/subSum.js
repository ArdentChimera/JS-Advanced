// · If the first element is not an array, return NaN
// · If the start index is less than zero, consider its value to be a zero
// · If the end index is outside the bounds of the array, assume it points to the last index of the array
// Input : [10, 20, 30, 40, 50, 60], 3, 300

function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (startIndex <  0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    return arr 
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce( (acc, val) => acc + val, 0);5

}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));