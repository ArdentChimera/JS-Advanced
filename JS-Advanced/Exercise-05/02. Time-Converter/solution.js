function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');


    const daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', (e) => {
        let days = daysInput.value
        let convertedToHours = days * 24;
        hoursInput.value = convertedToHours;
        let convertedToMinutes = days * 1440;
        minutesInput.value = convertedToMinutes;
        let convertedToSeconds = days * 86400;
        secondsInput.value = convertedToSeconds;
    });

    const hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', (e) => {
        let hours = hoursInput.value
        let convertedToDays = hours / 24;
        daysInput.value = convertedToDays;
        let convertedToMinutes = convertedToDays * 1440;
        minutesInput.value = convertedToMinutes;
        let convertedToSeconds = convertedToDays * 86400;
        secondsInput.value = convertedToSeconds;
    });

    const minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', (e) => {
        let minutes = minutesInput.value
        let convertedToDays = minutes / 1440;
        daysInput.value = convertedToDays;
        let convertedToHours = convertedToDays * 24;
        hoursInput.value = convertedToHours;
        let convertedToSeconds = convertedToDays * 86400;
        secondsInput.value = convertedToSeconds;
    });

    const secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', (e) => {
        let seconds = secondsInput.value
        let convertedToDays = seconds / 86400;
        daysInput.value = convertedToDays;
        let convertedToHours = convertedToDays * 24;
        hoursInput.value = convertedToHours;
        let convertedToMinutes = convertedToDays * 1440;
        minutesInput.value = convertedToMinutes;
    });
}