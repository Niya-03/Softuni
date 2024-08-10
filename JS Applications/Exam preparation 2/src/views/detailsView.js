import { deleteMotor, getSingleMotor } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

const detailTemp = (item, hasOwner, deleteHandler) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${item.imageUrl} alt="example1" />
          <p id="details-title">${item.model}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="year">Year: ${item.year}</p>
              <p class="mileage">Mileage: ${item.mileage} km.</p>
              <p class="contact">Contact Number: ${item.contact}</p>
                 <p id = "motorcycle-description">
                 ${item.about}
                      </p>
            </div>
             <!--Edit and Delete are only for creator-->
        ${hasOwner ? html`<div id="action-buttons">
          <a href="/edit/${item._id}" id="edit-btn">Edit</a>
          <a @click=${deleteHandler} data-id=${item._id} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>` : ''}
          </div>
      </div>
    </section>
`;


export async function showDetailsView(ctx) {
    const motorId = ctx.params.id;
    const data = await getSingleMotor(motorId);
    const hasOwner = isOwner(data._ownerId);
    render(detailTemp(data, hasOwner, onDelete));
}

async function onDelete(e) {
    e.preventDefault();
    const choice = confirm('Are you sure?');

    if (choice) {
        await deleteMotor(e.target.dataset.id);
        page.redirect('/dashboard');
    }

}