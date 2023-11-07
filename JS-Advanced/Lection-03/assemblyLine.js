function createAsemblyLine() {
    let decorations = {};

    decorations.hasClima = (obj) => {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if (obj.temp < obj.tempSettings) {
                obj.temp += 1;
            }else {
                obj.temp -= 1;
            }
        }
    };
    decorations.hasAudio = (obj) => {
        obj.currentTrack = {
            name: null,
            artist: null,
        };
        obj.nowPlaying = () => {
            console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
        };
    };
    decorations.hasParktronic = (obj) => {
         obj.checkDistance = (distance) => {
            if(distance < 0.1) {
                 console.log("Beep! Beep! Beep!");
            }else if (distance < 0.25) {
                console.log("Beep! Beep!");
            }else if (distance < 0.5) {
                console.log("Beep!");
            }else {
                console.log("");
            }
        };
    };
    
    return decorations;
}

const assemblyLine = createAsemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
console.log("--------------------------------");
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
console.log("--------------------------------");
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
console.log("--------------------------------");
assemblyLine.hasParktronic(myCar)
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log("--------------------------------");
console.log(myCar);

