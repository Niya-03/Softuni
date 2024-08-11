import {page, render, html} from "../lib.js";
import { getCars } from "../data/data.js";

const dashboardTemp = (data) => html `
<h3 class="heading">Our Cars</h3>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${data.length ? data.map(x => cardTemp(x)) : html `<h3 class="nothing">Nothing to see yet</h3>`}
    
  </section>
`;

const cardTemp = (item) => html `
<div class="car">
      <img src=${item.imageUrl} alt="example1" />
      <h3 class="model">${item.model}</h3>
      <div class="specs">
        <p class="price">Price: €${item.price}</p>
        <p class="weight">Weight: ${item.weight} kg</p>
        <p class="top-speed">Top Speed: ${item.speed} kph</p>
      </div>
      <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;

export async function showDashboardView(){
    const data = await getCars();
    debugger;
    render(dashboardTemp(data));
}