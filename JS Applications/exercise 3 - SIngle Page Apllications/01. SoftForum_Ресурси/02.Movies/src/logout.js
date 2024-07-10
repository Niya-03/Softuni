import { showHomeView } from "./home.js";
import { showView } from "./nav.js";
import { clearUserData } from "./userHelper.js";
import { logout } from "./userService.js";

export async function showLogout(){
    debugger;
    await logout();
    clearUserData();
}