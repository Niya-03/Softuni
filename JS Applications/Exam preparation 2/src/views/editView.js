import { editMotor, getSingleMotor } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (item, handler) => html`
      <section id="edit">
          <h2>Edit Motorcycle</h2>
          <div class="form">
            <h2>Edit Motorcycle</h2>
            <form @submit=${handler} class="edit-form" data-id=${item._id}>
              <input             
                type="text"
                name="model"
                id="model"
                placeholder="Model"
                .value="${item.model}" 
              />
              <input              
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
                .value="${item.imageUrl}" 
              />
              <input             
              type="number"
              name="year"
              id="year"
              placeholder="Year"
              .value="${item.year}" 
            />
            <input            
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
            .value="${item.mileage}" 
          />
          <input          
            type="number"
            name="contact"
            id="contact"
            placeholder="contact"
            .value="${item.contact}" 
          />
            <textarea        
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            >${item.about}</textarea>
              <button type="submit">Edit Motorcycle</button>
            </form>
        </div>
      </section>
`;



export async function showEditView(ctx) {

    const motorId = ctx.params.id;
    const data = await getSingleMotor(motorId);
    render(editTemp(data, createSubmitHandler(onEdit)))
}

async function onEdit(data, form) {
    const { model, imageUrl, year, mileage, contact, about } = data;
    const id = form.dataset.id;

    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert("Fill all fields!");
    }

    await editMotor(id, data);
    page.redirect('/details/' + id);
}