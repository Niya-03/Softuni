function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onClick);

    function onClick(event){
        let x = event.offsetX;
        const percent = Math.floor(x / 300 *100);
        let result = document.getElementById('result');
        result.textContent = percent + "%";
    }
}