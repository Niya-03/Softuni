//import { showRegisterView } from "./register.js";
import { showHomeView } from "./home.js";
import "./login.js";
import './register.js';
import {showView} from "./nav.js";
import { updateNav } from "./nav.js";
import { request } from "./req.js";
import { getUserData } from "./userHelper.js";

import { showLogout } from "./logout.js";

document.querySelectorAll('section').forEach(section => section.style.display = 'none');
showHomeView();


const userData = getUserData();
updateNav(userData);

document.querySelector('nav').addEventListener('click', onNavigate);

const routes = {
    '/': 'home-page',
    '/register': 'form-sign-up',
    '/home': 'home-page',
    '/login': 'form-login',
    '/logout': 'form-login',
    '/addMovie': ()=> console.log('add'),
    '/details/:id': ()=>console.log('add')
}

export async function onNavigate(e) {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
   
    if (e.target.tagName !== 'A' || !e.target.href) {
        return;
    }
    e.preventDefault();

    const url = new URL(e.target.href);
    const path = url.pathname;

    

    showView(routes[path]);
    updateNav();
    
    if(path == '/logout'){
        showLogout();
    }
}

