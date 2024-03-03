function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange(e) {
        let email = e.target.value;
        let regex = /^[a-z]+@[a-z]+.[a-z]+$/g;

        if (regex.test(email)) {
            e.target.classList.remove("error");
        } else {
            e.target.classList.add("error");
        }
    }

}