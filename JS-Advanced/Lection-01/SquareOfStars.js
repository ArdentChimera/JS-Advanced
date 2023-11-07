function squareOfStars(n) {   
    let rows = n;
    if (!n) {
        rows = 5;
    }
    let pattern = "";
    
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows; j++){
            pattern += " *";
        }
        pattern += "\n";
    }

    console.log(pattern);
}

squareOfStars(2);