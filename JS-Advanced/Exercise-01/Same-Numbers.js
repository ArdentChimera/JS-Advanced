function sameNumbers(number) {
    let isSame  = true;
    let numAsString = number.toString();
    let current = Number(numAsString[0]);
    let sum = 0;
    for (let index = 0; index < numAsString.length; index++) {
        if (current !== Number(numAsString[index])) { 
            isSame = false;
        }

        sum += Number(numAsString[index]);
          
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);