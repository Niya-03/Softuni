function reverse(input){
    let index = 0;
    let pass = input[index];
   

    let splitString = pass.split("");
    let reverse = splitString.reverse();
    let correct = reverse.join("");

    index++;
    let currentTry = input[index];

    let times = 0;

    while(currentTry !== correct){

        times++
                
        if(times >3){
            console.log(`User ${pass} blocked!`);
            break;
        }

        console.log(`Incorrect password. Try again.`);

        index++;
        currentTry = input[index];
    }


        if(currentTry === correct){
            //pass = input[0];
            console.log(`User ${pass} logged in.`)
        }
    
}

reverse(['Acer','login','go','let me in','recA'])
reverse(['sunny','rainy','cloudy','sunny','not sunny'])