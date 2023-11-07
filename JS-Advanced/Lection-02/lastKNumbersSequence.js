function sequence(sequenceLength, previousElements) {
    let outputArray = [];

    for (let i = 0; i < sequenceLength - 1; i++) {
        if (outputArray.length < previousElements - 1) {
            outputArray.push(1);
        }
        let sum = 0
        let lastThreeNums = [];
        if (outputArray.length <= previousElements) {
            lastThreeNums = outputArray;
        }else {
            lastThreeNums = outputArray.slice(-previousElements);
        }
         
        for (let j = 0; j < lastThreeNums.length; j++) { 
            
            sum += lastThreeNums[j];
        }
        outputArray.push(sum);  

    }

    return outputArray;
}

sequence(8, 2);