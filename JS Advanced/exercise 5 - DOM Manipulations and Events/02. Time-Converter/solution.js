function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let mins = document.getElementById('minutes');
    let secs = document.getElementById('seconds');

    let dayBtn = document.getElementById('daysBtn');
    let hourBtn = document.getElementById('hoursBtn');
    let minsBtn = document.getElementById('minutesBtn');
    let secsBtn = document.getElementById('secondsBtn');


    dayBtn.addEventListener('click', () => {
        let current = Number(days.value);
        hours.value = current * 24;
        mins.value = current * 24 * 60;
        secs.value = current * 24 * 60 * 60;
    })

    hourBtn.addEventListener('click', () => {
        let current = Number(hours.value);
        days.value = current / 24;
        mins.value = current * 60;
        secs.value = current * 60 * 60;
    })

    minsBtn.addEventListener('click', () => {
        let current = Number(mins.value);
        days.value = current / 60 / 24;
        hours.value = current / 60;
        secs.value = current * 60;
    })

    secsBtn.addEventListener('click', () => {
        let current = Number(secs.value);
        days.value = current / 60 / 60 / 24;
        mins.value = current / 60;
        hours.value = current / 60 / 60;
    })
}