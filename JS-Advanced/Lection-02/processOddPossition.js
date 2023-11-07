function processOddPosition (arr) { 
    let oddPositionArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddPositionArr.push(arr[i] * 2);
        }  
    }

    oddPositionArr.reverse();

    return oddPositionArr.join(' ')

}

processOddPosition([3, 0, 10, 4, 7, 3]);

// OTHER METHOD TO SOLVE 

function solve(arr) {
    return arr.filter((a, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(' ');
    }