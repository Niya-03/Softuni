function add(num){
    let sum = 0;

    function recursive(n){
        sum+=n;
        console.log(sum)
        return recursive;
    }
    
    recursive.toString = () => sum;
    return recursive(num);   
}

console.log(add(1)(6)(-3))