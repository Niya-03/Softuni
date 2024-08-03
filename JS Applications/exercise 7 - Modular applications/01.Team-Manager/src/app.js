import page from "../node_modules/page/page.mjs";
import { showHomeView } from "./views/homeView.js";
import { showRegisterView } from "./views/registerView.js";
import {showLoginView} from "./views/loginView.js";
import { showLogout } from "./views/logoutView.js";
import { showBrowseTeamView } from "./views/browseTeamView.js";
import { showDetailsView } from "./views/detailsView.js";


page("/", showHomeView);
page("/home", showHomeView);
page("/browse-team", showBrowseTeamView);
page("/my-team", ()=> console.log('my-team'));
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", showLogout);
page("/create", ()=> console.log('create'));
page("/details/:id", showDetailsView);


page.start();