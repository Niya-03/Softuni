import {page, render, html} from "../lib.js";
import { deleteCar, getCar, getCars } from "../data/data.js";
import { isOwner } from "../util.js";

const detailsTemp = (item, hasOwner) => html `
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${item.imageUrl} alt="example1" />
      <p id="details-title">${item.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: €${item.price}</p>
          <p class="weight">Weight: ${item.weight} kg</p>
          <p class="top-speed">Top Speed: ${item.speed} kph</p>
          <p id="car-description">
          ${item.about}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${hasOwner ? html `<div id="action-buttons">
          <a href="/edit/${item._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} data-id=${item._id} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>` : ''}
      </div>
    </div>
  </section>
`;

export async function showDetailsView(ctx){
    const carId = ctx.params.id;
    const data = await getCar(carId);
    const hasOwner = isOwner(data._ownerId);
debugger;
    render(detailsTemp(data, hasOwner));
}

async function onDelete(e){
    e.preventDefault();
    const id = e.target.dataset.id;

    const choice = confirm('Are you sure?');

    if(choice){
        await deleteCar(id);
        page.redirect('/dashboard');
    }
}