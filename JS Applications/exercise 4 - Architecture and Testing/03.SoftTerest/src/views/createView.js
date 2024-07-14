import { dataService } from "../api/dataService.js";

const createSection = document.querySelector("div[data-view-name='create']");
let context = null;
const form = createSection.querySelector('form');
form.addEventListener('submit', onSubmit);

export function showCreateView(ctx){
    context = ctx;
    context.render(createSection);
}

async function onSubmit(e){
    e.preventDefault();
    debugger;
    const formData = new FormData(e.target);
    const {title, description, imageURL} = Object.fromEntries(formData);

    if(title.length < 6 || description < 10 || imageURL.length < 5){
        return alert("Error create");
    }

   await dataService.createIdea({title, description, imageURL});
   context.goTo('/03.SoftTerest/dashboard');
}