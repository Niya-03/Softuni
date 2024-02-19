function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    const select = document.getElementById('menu');
    select.appendChild(option);

    text.value = '';
    value.value = '';
}