function magicMatrices(matrixArr) {
    for(let row = 0; row < matrixArr.length - 1; row++) {
        let sumRowOne = matrixArr[row].reduce((acc, el) => acc + el);
        let sumRowTwo = matrixArr[row + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;
        for(let col = 0; col < matrixArr.length; col++) { 
            sumColOne += matrixArr[row][col];
            sumColTwo += matrixArr[row + 1][col];
        }

        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            console.log(false);
            return;
        }
        
    }
    console.log(true);
}

magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]);