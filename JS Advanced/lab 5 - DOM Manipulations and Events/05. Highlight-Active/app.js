function focused() {
    const inputs = Array.from(document.querySelectorAll("input"));
    debugger
    for(let node of inputs){
        node.addEventListener('focus', () => node.parentElement.className = "focused");
        node.addEventListener('blur', () => node.parentElement.classList.remove("focused"));
    }
}