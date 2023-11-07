function evenPositionElement(arr) {
    let evenPositionArr = [];
    arr.forEach(element => {
        if (arr.indexOf(element) % 2 === 0) {
            evenPositionArr.push(element);
        }
    });

    console.log(evenPositionArr.join(' '));
}

evenPositionElement(['20', '30', '40','50', '60']);