function getFibonator() {
    let last = 0;
    let current = 1;
    let first = true;

    function solution() {
        if (first) {           
            first = false;
            return 1;
        }
        let next = current + last;
        last = current;
        current = next;
        return next;
    }

    return solution;
}

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13