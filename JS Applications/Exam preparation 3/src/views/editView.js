import {page, render, html} from "../lib.js";
import { getCar, updateCar } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (item, handler) => html `
    <section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form @submit=${handler} data-id=${item._id} class="edit-form">
        <input type="text" name="model" id="model" placeholder="Model" .value="${item.model}" />
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
          .value="${item.imageUrl}"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          .value="${item.price}"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
          .value="${item.weight}"
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
          .value="${item.speed}"
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
        >${item.about}"</textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function showEditTemp(ctx){
    const carId = ctx.params.id;
    const data = await getCar(carId);

    render(editTemp(data, createSubmitHandler(onEdit)))
}

async function onEdit(data, form){
    const {model, imageUrl, price, weight, speed, about} = data;
    const id = form.dataset.id;

    if(!model || !imageUrl || !price || ! weight || !speed || !about){
        return alert('Fill all fields!');
    }

    await updateCar(id, {model, imageUrl, price, weight, speed, about});
    page.redirect(`/details/${id}`);
}