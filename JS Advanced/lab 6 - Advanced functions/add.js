function solution(num) {
    let number = num;

    function add(num2) {
        return number + num2
    }

    return add;
}

let add5 = solution(5);
console.log(add5(2))
console.log(add5(3))
