import { page, render, html } from "../lib.js";
import { searchByQuery } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const searchTemp = (handler, result) => html`
<section id="search">
    <div class="form">
      <h4>Search</h4>
      <form @submit=${handler} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <div class="search-result">
    ${result ? showResultTemp(result) : html`<h2 class="no-avaliable">No result.</h2>`}
    </div>
  </section>
`;

const showResultTemp = (result) => html`
${!!result.length ? result.map(x => html`<div class="car">
        <img src=${x.imageUrl} alt="example1"/>
        <h3 class="model">${x.model}</h3>
        <a class="details-btn" href="/details/${x._id}">More Info</a>
      </div>`) :
        html`<h2 class="no-avaliable">No result.</h2>`}
`;
/*
      <!--If there are matches display a div with information about every motorcycle-->
       */

export function showSearchView() {
    render(searchTemp(createSubmitHandler(onSearch)));
}

async function onSearch(data, form) {
    const { search } = data;

    if(!search){
        return alert('Fill the field!');
    }
    const result = await searchByQuery(search);

    const handler = createSubmitHandler(onSearch);
    render(searchTemp(handler, result));

}