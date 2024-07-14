
import { login } from "../api/userService.js";
import { setUser } from "../utils/userUtils.js";
debugger;
const view = document.querySelector("div[data-view-name='login']")
const form = view.querySelector("form").addEventListener('submit', onLoginSubmit);
let context = null;
debugger;
export function showLoginView(ctx){
    
    context = ctx;
    context.render(view);
}

async function onLoginSubmit(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);

    if(!email || !password){
        return alert("Fill all fields!");
    }

    const userData = await login({email, password});
    
    setUser(userData);
    context.goTo("/03.SoftTerest/home");
    context.updateNav();
    
}