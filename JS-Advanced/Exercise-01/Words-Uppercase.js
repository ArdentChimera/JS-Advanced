function upperCase(string) {
    let splited = string.replace(/[^\w\s]/g, '');
    let stringArr = splited.split(' ');
    let resultArr = [];

    stringArr.forEach(element => {
        let upperCase = element.toUpperCase();
        resultArr.push(upperCase);
    });


    console.log(resultArr.join(', '));
    
}

upperCase('Hi, how are you?');