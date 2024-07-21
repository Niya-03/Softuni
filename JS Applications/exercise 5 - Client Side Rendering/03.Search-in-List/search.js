import { render, html } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
const result = document.getElementById('result');
const townsRoot = document.getElementById('towns');
const input = document.getElementById('searchText');
update();

document.querySelector('button').addEventListener('click', search)

function update(match) {

   render(ulTemplate(towns, match), townsRoot);
}

function ulTemplate(towns, match) {
   return html`<ul>${towns.map(town => createLiTemplate(town, match?.includes(town)))}</ul>`
}

function createLiTemplate(town, isActive) {
   return html`<li class=${isActive ? 'active' : ''}>${town}</li>`
}


function search() {
   const searchText = input.value;
   const match = towns.filter(town => town.includes(searchText));
   update(match);
   renderMatchCount(match.length);
}

function renderMatchCount(count) {
   render(html`${count} matches found`, result);
}