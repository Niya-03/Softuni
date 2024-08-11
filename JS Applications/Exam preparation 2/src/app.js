import {page} from './lib.js';
import { showHomeView } from './views/homeView.js';
import { userApi } from './data/users.js';
import { getUserData, updateNav } from './util.js';
import { showLoginView } from './views/loginView.js';
import { showRegisterView } from './views/registerView.js';
import { showDashboardView } from './views/dashboardView.js';
import { showAddView } from './views/addView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editView.js';
import { showSearchView } from './views/searchView.js';

updateNav();

page('/',showHomeView);
page('/home',showHomeView);
page('/dashboard',showDashboardView);
 page('/login',showLoginView);
 page('/register',showRegisterView);
page('/add', showAddView)
page('/details/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/search', showSearchView);


page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await userApi.logout(); 
    page.redirect('/');
    updateNav();});


