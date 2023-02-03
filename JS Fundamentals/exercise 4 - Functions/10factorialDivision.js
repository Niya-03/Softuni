function factorialDivision(num1, num2) {

    function factorial(num) {
        let fact = 1;

        for (let i = 2; i <= num; i++) {
            fact = fact * i;
        }

        return fact;
    }

    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);

    return (factorial1 / factorial2).toFixed(2);
}

console.log(factorialDivision(6, 2))