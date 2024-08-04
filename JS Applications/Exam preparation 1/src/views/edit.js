import { updateEvent } from '../data/events.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';
import { getEventById } from '../data/events.js';

const editTemp = (eventData, onEdit) => html `
    <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Event"
          .value=${eventData.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image"
          .value=${eventData.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
          .value=${eventData.category}
        />


        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value=${eventData.description}
        ></textarea>
        
        <label for="date-and-time">Event Time:</label>
        <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
        .value=${eventData.date}
      />

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function showEditView(ctx) {
    const eventId = ctx.params.id;
    const eventData = await getEventById(eventId);
    render(editTemp(eventData, createSubmitHandler(onEdit)));

    async function onEdit({name, imageUrl, category, description, date }, form) {
    if(!name || !imageUrl || !category || !description || !date){
        return alert('Fill all fields');
    }

    await updateEvent(eventId,{name, imageUrl, category, description, date});
    page.redirect('/dashboard/' + eventId);
}
}


