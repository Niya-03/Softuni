function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    debugger
    const input = document.getElementById("email");
    input.addEventListener('change', () => {
        let arr = input.value.match(pattern);
        if (arr == null) {
            input.className = "error";
        } else {
            input.className = '';
        }
    })
}