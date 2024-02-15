function toggle() {
    let moreless = document.getElementsByClassName("button");
    let content = document.getElementById("extra");
    if(moreless[0].textContent == "More"){
        moreless[0].textContent = "Less";
        content.style.display = "block";

    }else{
        moreless[0].textContent = "More"
        content.style.display = "none";
    }
}