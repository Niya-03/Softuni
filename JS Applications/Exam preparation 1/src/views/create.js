import { createEvent } from '../data/events.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

const createTemp = (onCreate) => html`
<section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form @submit=${onCreate} class="create-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Event"
        />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image URL"
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
        />


        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>
        
        <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
      />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export function showCreateView(ctx) {
    render(createTemp(createSubmitHandler(onCreate)));
}


async function onCreate({name, imageUrl, category, description, date }, form) {
    if(!name || !imageUrl || !category || !description || !date){
        return alert('Fill all fields');
    }

    await createEvent(name, imageUrl, category, description, date);
    page.redirect('/dashboard');
}

