import { addLike, getLike, getSingleMovie } from "./dataService.js";
import { getUserId } from "./userHelper.js";
const section = document.getElementById('movie-example');

let movieId;
let movieData;

export async function showDetails(e){
    section.innerHTML = "";
    e.preventDefault();
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('movie-example').style.display = 'block';

    const id = e.target.dataset.id;
    movieId = id;
    const data = await getSingleMovie(id);
    movieData = data;
    const dataLikes = await getLike(id);

    const container = listDetails(data, dataLikes);
    section.appendChild(container);
}

function listDetails(data, dataLikes){
    const container = document.createElement('div');
    container.classList.add("container");
const isOwner = getUserId() === data._ownerId;

    let temp = `
        <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src=${data.img}
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${data.description}
              </p>

              
            
    `;

    if(isOwner){
        temp+=`<a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              
              <span class="enrolled-span">Liked ${dataLikes}</span>
              </div>
          </div>`
    }else{
        temp+=`<a class="btn btn-primary" href="likeMovie">Like</a>
        <span class="enrolled-span">Liked ${dataLikes}</span>
        </div>
          </div>`
    }



    container.innerHTML = temp;
    debugger;
    container.querySelector("[href='likeMovie']").addEventListener('click', onAction);
    return container;
}

function onAction(e){
    e.preventDefault();
    addLike(movieId);
    listDetails(movieData, getLike(movieId));
    
}

/*
<div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: Black Widow</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                Natasha Romanoff aka Black Widow confronts the darker parts of
                her ledger when a dangerous conspiracy with ties to her past
                arises. Comes on the screens 2020.
              </p>
              <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <a class="btn btn-primary" href="#">Like</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div>
        </div>
*/