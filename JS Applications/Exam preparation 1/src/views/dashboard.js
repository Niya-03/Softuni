import { getAllEvents } from '../data/events.js';
import {html, render} from '../lib.js';

const dashboardTemp = (data)=> html `
 <h2>Current Events</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${data.length? data.map(cardTemp) : html `<h4>No Events yet.</h4>`}
    
  </section>
`;

const cardTemp = (item)=> html `
<div class="event">
      <img src=${item.imageUrl} alt="example1" />
      <p class="title">
        ${item.name}
      </p>
      <p class="date">${item.date}</p>
      <a class="details-btn" href="/dashboard/${item._id}">Details</a>
    </div>
`;

export async function showDashboardView(ctx){
    const eventData = await getAllEvents();

    render(dashboardTemp(eventData));
}