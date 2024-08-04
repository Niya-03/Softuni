import {page} from './lib.js';
import { showExample } from './views/example.js';
//import { api } from './data/request.js';
import { userApi } from './data/users.js';


page('/',showExample);
page.start();

window.api = userApi;