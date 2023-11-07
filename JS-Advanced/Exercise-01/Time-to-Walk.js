function timeToWalk(steps, footprint, speed) { 
    let distanceInMeters = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInMeters / speedMetersInSec;
    let breaks = Math.floor(distanceInMeters / 500);
    
    
    let timeInMin = Math.floor(time / 60);
    let timeInSec = time - (timeInMin * 60);
    let timeInHours = Math.floor(timeInMin / 60);
    
    let hoursToPrint = timeInHours < 10 ? `0${timeInHours}` : timeInHours;
    let minutesToPrint = timeInMin % 60 + breaks;
    minutesToPrint = minutesToPrint < 10 ? `0${minutesToPrint}` : minutesToPrint;
    let secondsToPrint = timeInSec < 10 ? `0${timeInSec}` : timeInSec;

    console.log(`${hoursToPrint}:${minutesToPrint}:${Math.round(secondsToPrint)}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);