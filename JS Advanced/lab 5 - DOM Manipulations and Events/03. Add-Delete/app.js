function addItem() {
    const input = document.getElementById("newItemText");
    let li = document.createElement("li");
    li.textContent = input.value;

    const deleteButton = document.createElement('a');
    deleteButton.href = "#";
    deleteButton.textContent = "[Delete]";

    deleteButton.addEventListener('click', del);

    function del(){
        li.remove();
    }

    li.appendChild(deleteButton);

    let list = document.getElementById("items");
    list.appendChild(li);
}