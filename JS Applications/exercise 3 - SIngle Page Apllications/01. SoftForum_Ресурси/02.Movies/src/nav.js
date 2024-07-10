export function showView(sectionId){
    document.getElementById(sectionId).style.display = 'block';
}

export function updateNav(userData) {
    const userNav = document.querySelectorAll('li.user');
    const guestNav = document.querySelectorAll('li.guest');

    const welcomemsg = document.getElementById('welcome-msg');
   
    
    if (userData) {
        userNav.forEach(li => li.style.display = 'block');
        guestNav.forEach(li => li.style.display = 'none');
        welcomemsg.textContent = `Welcome, ${userData.email}`
    } else {
        userNav.forEach(li => li.style.display = 'none');
        guestNav.forEach(li => li.style.display = 'block');
    }
}