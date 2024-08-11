import {page, render, html} from "../lib.js";
import { addCar, getCars } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const createTemp = (handler) => html`
<section id="create">
    <div class="form form-auto">
      <h2>Share Your Car</h2>
      <form @submit=${handler} class="create-form">
        <input type="text" name="model" id="model" placeholder="Model"/>
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export function showCreateView(){
    render(createTemp(createSubmitHandler(onCreate)));
}

async function onCreate(data, form){
    const {model, imageUrl, price, weight, speed, about} = data;

    if(!model || !imageUrl || !price || ! weight || !speed || !about){
        return alert('Fill all fields!');
    }

    await addCar({model, imageUrl, price, weight, speed, about});
    page.redirect('/dashboard');
}