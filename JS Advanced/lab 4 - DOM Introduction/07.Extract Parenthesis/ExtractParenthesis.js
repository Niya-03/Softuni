function extract(content) {
    let text = document.getElementById("content").textContent;
    let pattern = /\([A-Za-z ]{1,}\)/g;
    let matches = text.match(pattern);

    return matches.join("; ");

}