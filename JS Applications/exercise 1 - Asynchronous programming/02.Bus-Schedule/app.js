function solve() {

    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const infoBox = document.getElementById('info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const stop = {
        currentStop: "",
        nextStop: "depot",
    }


    async function depart() {
        try {
            const response = await fetch(url + stop.nextStop);
            const data = await response.json();
            stop.currentStop = data.name;
            stop.nextStop = data.next;
            infoBox.textContent = `Next stop ${stop.currentStop}`;
            
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            infoBox.textContent = 'Error';
        }

    }



    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoBox.textContent = `Arriving at ${stop.currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();