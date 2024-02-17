function addItem() {
    const input = document.getElementById("newItemText");
    let li = document.createElement("li");
    li.textContent = input.value;

    let list = document.getElementById("items");
    list.appendChild(li);
}