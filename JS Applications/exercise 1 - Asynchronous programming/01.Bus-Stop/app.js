function getInfo() {

    const stopIdRef = document.getElementById("stopId");
    const stopId = stopIdRef.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopName = document.getElementById("stopName");
    const busesList = document.getElementById("buses");

    stopName.textContent = "";
    busesList.innerHTML="";

    const response = fetch(url);
    response.then(res => {
        res.json().then(data => {
        stopName.textContent = data.name;
        
        appendChildl(Object.entries(data.buses));
    }).catch(err => {    
        stopName.textContent = "Error";
    })
}).catch(err => {    
    stopName.textContent = "Error";
});



function appendChildl(data){
    for([bus, time] of data){
        let el = document.createElement('li');
        el.textContent = `Bus ${bus} arrives in ${time} minutes`;
        busesList.appendChild(el);
    }
}

}