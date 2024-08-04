import { deleteEvent, getEventById } from '../data/events.js';
import { getVisitorsByEventId, goToEvent, isGoing } from '../data/going.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemp = (data, hasUser, isOwner, visitors, isUserGoing, onDelete, onGoing) => html`
 <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-title">${data.name}</p>
      <p id="details-category">
        Category: <span id="categories">${data.category}</span>
      </p>
      <p id="details-date">
        Date:<span id="date">${data.date}</span></p>
      <div id="info-wrapper">
        <div id="details-description">
          <span>${data.description}</span>
        </div>

      </div>

      <h3>Going: <span id="go">${visitors}</span> times.</h3>
    ${hasUser ? html`
      <div id="action-buttons">
        ${isOwner ? html`<a href="/edit/${data._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` :
           (!isUserGoing ? html`<a href="javascript:void(0)" id="go-btn" @click=${onGoing}>Going</a>` : null)
        }
        
        
        ` : ''}
      
      </div>
    </div>
  </section>
`;

export async function showDetailsView(ctx) {
    const eventId = ctx.params.id;

    const requests = [
        getEventById(eventId),
        getVisitorsByEventId(eventId)
    ]

    const user = getUserData();

    if(user){
        requests.push(isGoing(eventId, user._id));
    }

    const [eventData, visitors, isUserGoing] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == eventData._ownerId;
    render(detailsTemp(eventData, hasUser, isOwner, visitors, isUserGoing, onDelete, onGoing));

    async function onDelete(){
        const choice = confirm ('Are you sure?');

        if(choice){
            await deleteEvent(eventId);
            page.redirect('/dashboard');
        }
        
    }

    async function onGoing(){
        goToEvent(eventId);
        page.redirect('/dashboard/' + eventId);
    }
}