import { getMotors } from "../data/data.js";
import { html, render, page } from "../lib.js";

const dashboardTemp = (data) => html `
      <h2>Available Motorcycles</h2>
      <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${data.length ? data.map(x => cardTemp(x)) : html `<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
        
        
      </section>
`;

const cardTemp = (item) => html `
<div class="motorcycle">
          <img src=${item.imageUrl} alt="example1" />
          <h3 class="model">${item.model}</h3>
          <p class="year">Year: ${item.year}</p>
          <p class="mileage">Mileage: ${item.mileage} km.</p>
          <p class="contact">Contact Number: ${item.contact}</p>
          <a class="details-btn" href="/details/${item._id}">More Info</a>
        </div>
`;

export async function showDashboardView(ctx){
    const data = await getMotors();
    render(dashboardTemp(data));
}