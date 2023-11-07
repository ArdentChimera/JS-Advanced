function solve(area, vol, input) {
    const objects = JSON.parse(input);
    const output = [];

    objects.forEach(obj => {
        const areaValue = area.apply(obj);
        const volValue = vol.apply(obj);

        let outputObj = { area: areaValue, volume: volValue};
        output.push(outputObj);
    });
    
    return output;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y *
    this.z);
};

solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`);
    