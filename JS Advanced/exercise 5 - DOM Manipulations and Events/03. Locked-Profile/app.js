function lockedProfile() {
    const main = document.getElementById('main');
    main.addEventListener('click', show)

    function show(event) {
        let unlocked = true;
        let locker = event.target.parentElement.querySelector('input[type = "radio"]')
        if (locker.checked == true) {
            unlocked = false;
        }

        if (event.target.tagName == 'BUTTON' && event.target.textContent == "Show more" && unlocked) {
            let newdiv = event.target.parentElement.getElementsByTagName('div')[0];
            event.target.textContent = "Hide it";
            newdiv.style.display = "block";
        }
        else if (event.target.tagName == 'BUTTON' && event.target.textContent == "Hide it" && unlocked) {
            event.target.textContent = "Show more";
            let newdiv = event.target.parentElement.getElementsByTagName('div')[0];
            newdiv.style.display = "";
        }
    }
}