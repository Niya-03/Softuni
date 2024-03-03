function validate() { 
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const isCompany = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const validDiv = document.getElementById('valid');
    const button = document.getElementById('submit');

    button.addEventListener('click', check);

    function check(e) {
        e.preventDefault()
        let usernamePattern = /^[a-zA-Z0-9]*$/g;
        let passwordPattern = /^\w+$/g;
        let emailPattern = /^.*@.*\..*$/g;
        let allCorrect = true;

        if (usernamePattern.test(username.value) && username.value.length >= 3 && username.value.length <= 20) {
            username.style.border = 'none';
        } else {
            username.style.borderColor = 'red';
            allCorrect = false;
        }

        if (passwordPattern.test(password.value) && password.value.length >= 5 && password.value.length <= 15) {
            password.style.border = 'none';
        } else {
            password.style.borderColor = 'red';
            allCorrect = false;
        }

        if (confirmPassword.value === password.value) {
            confirmPassword.style.border = 'none';
        } else {
            confirmPassword.style.borderColor = 'red';
            allCorrect = false;
        }

        if (emailPattern.test(email.value)) {
            email.style.border = 'none';
        } else {
            email.style.borderColor = 'red';
            allCorrect = false;
        }

        if (isCompany.checked) {
            companyInfo.style.display = 'block';
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                allCorrect = false;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (allCorrect) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    }
}
