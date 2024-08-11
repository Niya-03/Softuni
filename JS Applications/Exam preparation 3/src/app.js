import {page} from './lib.js';
import { showHomeView } from './views/homeView.js';
import { userApi } from './data/users.js';
import { updateNav } from './util.js';
import { showLoginView } from './views/loginView.js';
import { showRegisterView } from './views/registerView.js';
import { showDashboardView } from './views/dashboardView.js';
import { showCreateView } from './views/createView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditTemp } from './views/editView.js';
import { showSearchView } from './views/searchView.js';

updateNav();

page('/',showHomeView);
page('/login',showLoginView);
page('/register',showRegisterView);
page('/dashboard',showDashboardView);
page('/create',showCreateView);
page('/details/:id',showDetailsView);
page('/edit/:id',showEditTemp);
page('/search',showSearchView);









page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await userApi.logout(); 
    page.redirect('/');
    updateNav();});