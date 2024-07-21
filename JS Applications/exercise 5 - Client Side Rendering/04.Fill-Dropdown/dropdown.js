import { render, html } from "../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
const menu = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', addItem);
loadItems();



async function addItem(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    debugger;
    const text = document.getElementById('itemText').value;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    }

    const res = await fetch(url, options);

    if(res.status != 200){
        return alert("Error");
    }

    document.getElementById('itemText').value = '';
    loadItems();
}

async function loadItems(){
    const res = await fetch(url);
    const items = Object.entries(await res.json());
    render(items.map(item => html `<option .value=${item[1]._id}>${item[1].text}</option>`), menu);
}

