import { userService } from "../api/userService.js";
import { goTo } from "../common/goTo.js";
import { userHelper } from "../common/userHelper.js";

export async function showLogout(){
    await userService.logout();
    userHelper.removeUserData();
    goTo('/home');
}