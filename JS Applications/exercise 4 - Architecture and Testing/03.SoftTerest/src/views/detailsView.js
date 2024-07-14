
import { dataService } from "../api/dataService.js";
import { hasOwner } from "../utils/userUtils.js";

const detailsSection = document.querySelector("div[data-view-name='details']");

let context = null;

export async function showDetailView(ctx, data){
    detailsSection.innerHTML = '';
    context = ctx;
    context.render(detailsSection);
    const id = data[0];
    
    const idea = await dataService.getIdea(id);
    const isOwner = hasOwner(idea._ownerId);
    detailsSection.innerHTML = createIdeaTemplate(idea, isOwner);
    detailsSection.querySelector('a').addEventListener('click', onDelete);
}

async function onDelete(e){
    e.preventDefault();

    const id = e.target.dataset.id;
    await dataService.removeIdea(id);
    context.goTo('/03.SoftTerest/dashboard');
}

function createIdeaTemplate(idea, isOwner){
    return `
    <img class="det-img" src="${idea.img}" />
        <div class="desc">
            <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${idea.description}</p>
        </div>
        <div class="text-center">
            ${isOwner ? `<a class="btn detb" data-id=${idea._id} href="">Delete</a>` : ""}
        </div>
    `
}