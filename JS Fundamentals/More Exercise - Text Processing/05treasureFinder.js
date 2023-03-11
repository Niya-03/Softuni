function treasureFinder(input){
    let key = input.shift().split(" ");

    let index = 0;
    let command = input[index];

    while(command !== "find"){
        command = command.split("");
        let arr = command.slice();
        
        
        for (let num of key) {

            for(let i = 0; i<arr.length; i++){
                let code = arr[i].charCodeAt(0);
                code-=num;
                arr[i] = (String.fromCharCode(code));
            }
            
        }
        console.log(arr.join(""))


        index++;
        command = input[index];
    }
}

treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"]
)