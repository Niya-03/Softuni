function passwordValidator(pass) {

    let valid = true;

    function length(pass) {
        if (pass.length < 6 || pass.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            valid = false;
            return "Password must be between 6 and 10 characters";
        }
    }
    length(pass);

    function lettersAndDigits(pass) {

        let buff = 0;

        for (let i = 0; i < pass.length; i++) {
            let currentChar = pass[i];

            let code = currentChar.charCodeAt(0);

            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                buff = 0;
            } else {
                console.log("Password must consist only of letters and digits");
                valid = false;
                return "Password must consist only of letters and digits";
            }
        }
    }
    lettersAndDigits(pass);

    function digits(pass) {
        let digitSum = 0;

        for (let i = 0; i < pass.length; i++) {
            let currentChar = pass[i];

            if (currentChar == Number(currentChar)) {
                digitSum += 1;
            }
        }

        if (digitSum < 2) {
            console.log("Password must have at least 2 digits");
            valid = false;
            return "Password must have at least 2 digits";
        }
    }

    digits(pass)

    if(valid){
        console.log("Password is valid");
    }
}
passwordValidator('Pass123')