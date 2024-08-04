import {page} from './lib.js';
import { showHomeView } from './views/home.js';
import { showDashboardView } from './views/dashboard.js';
import { showLoginView } from './views/login.js';
import {showRegisterView} from './views/register.js'
import { userApi } from './data/users.js';
import { getUserData, updateNav } from './util.js';
import { showCreateView } from './views/create.js';
import { showDetailsView } from './views/details.js';
import { showEditView } from './views/edit.js';

updateNav();

page('/',showHomeView);
page('/dashboard',showDashboardView);
page('/login',showLoginView);
page('/register',showRegisterView);
page('/create', showCreateView)
page('/dashboard/:id', showDetailsView)
page('/edit/:id', showEditView)


page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await userApi.logout(); 
    page.redirect('/');
    updateNav();});


