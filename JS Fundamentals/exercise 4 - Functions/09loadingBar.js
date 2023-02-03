function loadingBar(num){
    let arr = ["[",".",".",".",".",".",".",".",".",".",".","]"];
  
    for(let i = 1; i <= num/10; i++){
        arr[i] = "%";
    }

    if(num === 100){
        console.log("100% Complete!");  
        console.log(`${arr.join("")}`);
    }else{
        console.log(`${num}% ${arr.join("")}`);
        console.log("Still loading...");
    }
    
}

loadingBar(100)